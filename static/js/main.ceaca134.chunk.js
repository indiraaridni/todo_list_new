(this.webpackJsonptodo_list_new=this.webpackJsonptodo_list_new||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(7),r=n.n(o),c=(n(13),n(3)),i=n(5),u=n(1);n(14);var s=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],r=n[1];return l.a.createElement("div",null,l.a.createElement("input",{value:o,onChange:function(e){return r(e.target.value)}}),l.a.createElement("button",{className:"btn btn-outline-success ml-3",onClick:function(){e.create(o),r("")}},"create"))},m=l.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})),d=l.a.createElement("svg",{className:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})),v=l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-up",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"})),h=l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"}));var b=function(e){var t=e.id,n=e.title,o=e.done,r=e.toggleDone,c=e.onDelete,i=e.edit,s=e.move,b=o?{textDecoration:"line-through",listStyleType:"none"}:{listStyleType:"none"},f=Object(a.useState)(!1),g=Object(u.a)(f,2),w=g[0],E=g[1],p=Object(a.useState)(n),N=Object(u.a)(p,2),O=N[0],j=N[1];return l.a.createElement("div",{className:"form-group"},w?l.a.createElement("div",null,l.a.createElement("input",{value:O,onChange:function(e){j(e.target.value)}}),l.a.createElement("button",{className:"btn btn-outline-success ml-2 mt-2",onClick:function(){i(t,O),E(!1)}},"Save")):l.a.createElement("div",null,l.a.createElement("span",{className:"title",style:b},n),l.a.createElement("button",{className:"btn btn-outline-success ml-2 mt-2",onClick:function(){return r(t)}},o?"Undone":"Done"),l.a.createElement("button",{className:"btn btn-outline-warning ml-3 mt-2",onClick:function(){return E(!0)}},d),l.a.createElement("button",{className:"btn btn-outline-danger ml-2 mt-2",onClick:function(){return c(t)}},m),l.a.createElement("button",{className:"btn btn-outline-success ml-3 mt-2",onClick:function(){return s(t,-1)}},v),l.a.createElement("button",{className:"btn btn-outline-success mt-2",onClick:function(){return s(t,1)}},h)))};var f=function(e){var t=e.list,n=e.onDelete,a=(e.todoUpdate,e.toggleDone),o=e.edit,r=e.move;return l.a.createElement("div",{className:"form-group"},t.map((function(e){return l.a.createElement(b,{id:e.id,title:e.title,done:e.done,key:e.id,toggleDone:a,onDelete:n,edit:o,move:r})})))},g=[{id:1,title:"first Todo",done:!1},{id:2,title:"second Todo",done:!1},{id:3,title:"third Todo",done:!1}];var w=function(){var e=Object(a.useState)(g),t=Object(u.a)(e,2),n=t[0],o=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"To Do List "),l.a.createElement(s,{create:function(e){console.log(e);var t={id:Math.random(),title:e,done:!1},a=[].concat(Object(i.a)(n),[t]);o(a)}}),l.a.createElement(f,{list:n,toggleDone:function(e){var t=n.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{done:!t.done}):t}));o(t)},onDelete:function(e){var t=Object(i.a)(n).filter((function(t){return t.id!==e}));o(t)},edit:function(e,t){var a=n.map((function(n){return n.id===e?Object(c.a)(Object(c.a)({},n),{},{title:t}):n}));o(a)},move:function(e,t){var a=n.findIndex((function(t){return t.id===e})),l=a+t;if(l<0||l>n.length-1)console.warn("CAN'T MOVE! INDEX UOT OF RANGE");else{var r=Object(i.a)(n),c=r[a];r[a]=r[l],r[l]=c,o(r)}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15),n(16);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.ceaca134.chunk.js.map