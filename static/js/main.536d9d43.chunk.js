(this.webpackJsonptodo_list_new=this.webpackJsonptodo_list_new||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),c=n.n(l),i=(n(13),n(3)),r=n(5),u=n(1);n(14);var m=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],c=n[1];return o.a.createElement("div",null,o.a.createElement("input",{value:l,onChange:function(e){return c(e.target.value)}}),o.a.createElement("button",{className:"btn btn-outline-success ml-3",onClick:function(){e.create(l),c("")}},"create"))},s=o.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})),d=o.a.createElement("svg",{className:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"}));var v=function(e){var t=e.id,n=e.title,l=e.done,c=e.toggleDone,i=e.onDelete,r=e.edit,m=e.move,v=l?{textDecoration:"line-through",listStyleType:"none"}:{listStyleType:"none"},b=Object(a.useState)(!1),f=Object(u.a)(b,2),h=f[0],g=f[1],E=Object(a.useState)(n),p=Object(u.a)(E,2),w=p[0],O=p[1];return o.a.createElement("div",{className:"form-group"},h?o.a.createElement("div",null,o.a.createElement("input",{value:w,onChange:function(e){O(e.target.value)}}),o.a.createElement("button",{className:"btn btn-outline-success ml-2 mt-2",onClick:function(){r(t,w),g(!1)}},"Save")):o.a.createElement("div",null,o.a.createElement("span",{className:"title",style:v},n),o.a.createElement("button",{className:"btn btn-outline-success ml-2 mt-2",onClick:function(){return c(t)}},l?"Undone":"Done"),o.a.createElement("button",{className:"btn btn-outline-warning ml-3 mt-2",onClick:function(){return g(!0)}},d),o.a.createElement("button",{className:"btn btn-outline-danger ml-2 mt-2",onClick:function(){return i(t)}},s),o.a.createElement("button",{className:"btn btn-outline-warning ml-3 mt-2",onClick:function(){return m(t,-1)}},"Up"),o.a.createElement("button",{className:"btn btn-outline-warning mt-2",onClick:function(){return m(t,1)}},"Down")))};var b=function(e){var t=e.list,n=e.onDelete,a=(e.todoUpdate,e.toggleDone),l=e.edit,c=e.move;return o.a.createElement("div",{className:"form-group"},t.map((function(e){return o.a.createElement(v,{id:e.id,title:e.title,done:e.done,key:e.id,toggleDone:a,onDelete:n,edit:l,move:c})})))},f=[{id:1,title:"first Todo",done:!1},{id:2,title:"second Todo",done:!1},{id:3,title:"third Todo",done:!1}];var h=function(){var e=Object(a.useState)(f),t=Object(u.a)(e,2),n=t[0],l=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,"To Do List "),o.a.createElement(m,{create:function(e){console.log(e);var t={id:Math.random(),title:e,done:!1},a=[].concat(Object(r.a)(n),[t]);l(a)}}),o.a.createElement(b,{list:n,toggleDone:function(e){var t=n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}));l(t)},onDelete:function(e){var t=Object(r.a)(n).filter((function(t){return t.id!==e}));l(t)},edit:function(e,t){var a=n.map((function(n){return n.id===e?Object(i.a)(Object(i.a)({},n),{},{title:t}):n}));l(a)},move:function(e,t){var a=n.findIndex((function(t){return t.id===e})),o=a+t;if(o<0||o>n.length-1)console.warn("CAN'T MOVE! INDEX UOT OF RANGE");else{var c=Object(r.a)(n),i=c[a];c[a]=c[o],c[o]=i,l(c)}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15),n(16);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.536d9d43.chunk.js.map