(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(22),i=n.n(r),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},l=n(8),o=n(13),j=n(23),u=n(33),d=n(34),b=n(6),h=n(14),p=n(20),m=n(64),O="FILTER_TEMPERAMENT",f="CLEAN_DETAIL",x="SORT_WEIGTH",v="SORT_BREED_AZ",g="FILTER_BREED_ORIGIN";var N={allDogs:[],copyDogs:[],detail:[],temperament:[]};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":return Object(b.a)(Object(b.a)({},e),{},{allDogs:t.payload,copyDogs:t.payload});case"GET_BY_NAME":return Object(b.a)(Object(b.a)({},e),{},{allDogs:t.payload});case"GET_DETAIL":return Object(b.a)(Object(b.a)({},e),{},{detail:t.payload});case"GET_TEMPERAMENTS":return Object(b.a)(Object(b.a)({},e),{},{temperament:t.payload});case O:var n,a=e.allDogs;return n="all"===t.payload?a:a.filter((function(e){return e.temperament&&e.temperament.split(", ").filter((function(e){return e===t.payload})).length})),Object(b.a)(Object(b.a)({},e),{},{copyDogs:n});case f:return Object(b.a)(Object(b.a)({},e),{},{detail:[]});case v:var c=e.copyDogs,r="z-a"===t.payload?c.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0})):c.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}));return Object(b.a)(Object(b.a)({},e),{},{copyDogs:r});case g:var i="all"===t.payload?e.allDogs:"api"===t.payload?e.allDogs.filter((function(e){return"number"===typeof e.id})):e.allDogs.filter((function(e){return"string"===typeof e.id}));return console.log(i),Object(b.a)(Object(b.a)({},e),{},{copyDogs:i});case x:var s=e.copyDogs.sort((function(e,n){var a=parseInt(e.weight.split(" ")[0]),c=parseInt(n.weight.split(" ")[0]);return"low"===t.payload?a-c:c-a}));return console.log(t.payload),console.log(s),Object(b.a)(Object(b.a)({},e),{},{copyDogs:s});default:return e}},S=Object(j.createStore)(y,Object(u.composeWithDevTools)(Object(j.applyMiddleware)(d.a))),D=(n(48),n(7)),E=n(4),T=(n(49),n(0));function w(e){var t=e.dog,n=t.id,a=t.image,c=t.name,r=t.temperament,i=t.weight;return Object(T.jsx)("div",{className:"card-dog",children:Object(T.jsxs)(l.b,{to:"/home/".concat(n),children:[Object(T.jsx)("img",{src:a,alt:"Imagen correspondiente a la raza del perro",width:"300px",height:"250px"}),Object(T.jsx)("h2",{children:c}),Object(T.jsxs)("p",{children:["Temperaments: ",r]}),Object(T.jsxs)("p",{children:["Weight: ",i," kg"]})]})})}n(56);function C(e){for(var t=e.dogsPerPage,n=e.allDogs,c=e.paginado,r=e.currentPage,i=[],s=1;s<=Math.ceil(n/t);s++)i.push(s);var l=Object(a.useState)(10),o=Object(E.a)(l,2),j=o[0],u=o[1],d=i.slice(j-10,j);return Object(T.jsx)("div",{className:"paginado-container",children:Object(T.jsxs)("ul",{className:"paginado",children:[Object(T.jsx)("li",{children:Object(T.jsx)("button",{onClick:function(){j>10&&u(j-10)},className:"button-next-prev",children:"Prev"})}),d.map((function(e){return Object(T.jsx)("li",{className:"paginado-item",children:Object(T.jsx)("button",{onClick:function(){c(e)},className:"paginado-link ".concat(e===r?"active":""),children:e})},e)})),Object(T.jsx)("li",{children:Object(T.jsx)("button",{onClick:function(){j<i.length&&u(j+10)},className:"button-next-prev",children:"Next"})})]})})}n(57);function M(e){var t=e.allDogs,n=Object(o.b)(),c=Object(o.c)((function(e){return e.temperament})),r=Object(a.useState)(1),i=Object(E.a)(r,2),s=i[0],l=i[1],j=Object(a.useState)(8),u=Object(E.a)(j,2),d=u[0],f=(u[1],s*d),v=f-d,N=Object(a.useState)(""),y=Object(E.a)(N,2),S=(y[0],y[1]),D=Object(a.useState)({sort:"",breed:"",weight:"",search:""}),M=Object(E.a)(D,2),L=(M[0],M[1]);Object(a.useEffect)((function(){W({order:""})}),[c]),Object(a.useEffect)((function(){n(function(){var e=Object(p.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/temperaments");case 3:return n=e.sent,e.abrupt("return",t({type:"GET_TEMPERAMENTS",payload:n.data}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[n]);var _=Object(a.useState)({temperament:"all"}),A=Object(E.a)(_,2),F=A[0],k=A[1];Object(a.useEffect)((function(){W({order:""})}),[F]);var I=Object(a.useState)("all"),P=Object(E.a)(I,2),G=(P[0],P[1]),R=Object(a.useState)({order:""}),B=Object(E.a)(R,2),z=B[0],W=B[1],$=t.filter((function(e){var t;return"all"===F.temperament||(null===(t=e.temperament)||void 0===t?void 0:t.includes(F.temperament))})).sort((function(e,t){switch(z.order){case"a-z":return e.name.localeCompare(t.name);case"z-a":return t.name.localeCompare(e.name);default:return 0}})).slice(v,f);function H(e){var t;e.preventDefault(),n((t=e.target.value,{type:O,payload:t})),k(Object(b.a)(Object(b.a)({},F),{},{temperament:e.target.value})),l(1),W({order:""})}var Z=t.filter((function(e){var t;return"all"===F.temperament||(null===(t=e.temperament)||void 0===t?void 0:t.includes(F.temperament))})).length;function J(e){var t;n((t=e.target.value,{type:g,payload:t})),G(e.target.value),l(1)}function U(e){var t;e.preventDefault(),n((t=e.target.value,{type:x,payload:t})),S("Order by abc : ".concat(e.target.value)),L({sorteandoWeigth:e.target.value})}return Object(T.jsxs)("div",{className:"cards-filters-container",children:[Object(T.jsxs)("div",{className:"filters-container",children:[Object(T.jsxs)("div",{className:"filterDiv",children:[Object(T.jsx)("label",{className:"filterLabel",children:"Temperaments:"}),Object(T.jsxs)("select",{className:"filterSelect",value:F.temperament,onChange:function(e){return H(e)},children:[Object(T.jsx)("option",{value:"all",children:"All"}),null===c||void 0===c?void 0:c.filter((function(e){return""!==e.name})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})).map((function(e){return Object(T.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(T.jsxs)("div",{className:"filterDiv",children:[Object(T.jsx)("label",{className:"filterLabel",children:"Order alphabetically"}),Object(T.jsxs)("select",{className:"filterSelect",value:z.order,onChange:function(e){return W({order:e.target.value})},children:[Object(T.jsx)("option",{value:"",children:"Select"}),Object(T.jsx)("option",{value:"a-z",children:"A-Z"}),Object(T.jsx)("option",{value:"z-a",children:"Z-A"})]})]}),Object(T.jsxs)("div",{className:"filterDiv",children:[Object(T.jsx)("label",{className:"filterLabel",children:"Filter by origin"}),Object(T.jsxs)("select",{className:"filterSelect",onChange:function(e){return J(e)},children:[Object(T.jsx)("option",{value:"",children:"Select"}),Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"db",children:"Created"}),Object(T.jsx)("option",{value:"api",children:"Existentes"})]})]}),Object(T.jsxs)("div",{className:"filterDiv",children:[Object(T.jsx)("label",{className:"filterLabel",children:"Filter by Weight"}),Object(T.jsxs)("select",{className:"filterSelect",onChange:function(e){return U(e)},children:[Object(T.jsx)("option",{value:"",children:"\u21c5"}),Object(T.jsx)("option",{value:"high",children:"high"}),Object(T.jsx)("option",{value:"low",children:"low"})]})]})]}),Object(T.jsx)(C,{dogsPerPage:d,currentPage:s,allDogs:Z,paginado:function(e){l(e)}}),Object(T.jsx)("div",{className:"cards-container",children:null===$||void 0===$?void 0:$.map((function(e){return Object(T.jsx)(w,{dog:e},e.id)}))})]})}n(58);function L(e){var t=e.handleChange;return Object(T.jsxs)("div",{className:"navbar",children:[Object(T.jsx)("input",{className:"searchDiv",type:"search",placeholder:"Search",onChange:t}),Object(T.jsx)(l.b,{to:"/create",children:Object(T.jsx)("button",{children:"Create new breed"})})]})}n(59);var _=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.allDogs})),n=Object(a.useState)(t),c=Object(E.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(E.a)(s,2),j=l[0],u=l[1];return Object(a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));i(e)}),[t,j]),Object(a.useEffect)((function(){e(function(){var e=Object(p.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/dogs");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_DOGS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(T.jsxs)("div",{className:"home-container",children:[Object(T.jsx)(L,{handleChange:function(e){e.preventDefault();var n=e.target.value;u(n),n||i(t)}}),Object(T.jsx)(M,{allDogs:r})]})};n(60);function A(){return Object(T.jsxs)("div",{className:"container-landing",children:[Object(T.jsxs)("div",{className:"container-text",children:[Object(T.jsx)("h1",{children:"List of All Kinds of Dog Breeds"}),Object(T.jsx)("p",{children:"From tiny French Bulldogs to giant Great Danes, our dog breed gallery has everything you need to know about your favourite dog breed!"}),Object(T.jsx)(l.b,{to:"/home",children:Object(T.jsx)("button",{className:"button-landing",children:"Enter"})})]}),Object(T.jsx)("div",{className:"container-image",children:Object(T.jsx)("img",{src:"https://dogplus.cl/wp-content/uploads/2021/09/dog-plus-dog-black.png",alt:"dogs-breeds",width:"350px"})})]})}n(61);function F(){var e=Object(D.e)().id,t=Object(o.b)(),n=Object(o.c)((function(e){return e.detail}));return Object(a.useEffect)((function(){return alert("Entr\xe9"),t(function(e){return function(){var t=Object(p.a)(Object(h.a)().mark((function t(n){var a;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/dogs/".concat(e));case 2:return a=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:a.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),function(){t({type:f}),alert("Sal\xed")}}),[t,e]),Object(T.jsxs)("div",{className:"detail-container",children:[Object(T.jsx)("h1",{children:n.name}),Object(T.jsx)(l.b,{to:"/home",children:Object(T.jsx)("button",{children:"Back"})}),Object(T.jsxs)("div",{className:"detail-elements-container",children:[Object(T.jsxs)("div",{className:"detail-text-container",children:[Object(T.jsx)("h3",{children:"Size "}),Object(T.jsxs)("p",{children:["The ",n.name," is a dog that in adulthood measures between"," ",n.height," cm."]}),Object(T.jsx)("h3",{children:" Weight"}),Object(T.jsxs)("p",{children:["A dog in good condition should be ",n.weight," kg."]}),Object(T.jsx)("h3",{children:"Average Lifespan"}),Object(T.jsxs)("p",{children:["With proper care and nutrition can live between"," ",n.life_span,"."]}),Object(T.jsx)("h3",{children:"Breed Temperament"}),Object(T.jsxs)("p",{children:["This breed is characterized by being ",n.temperament,"."]})]}),Object(T.jsx)("div",{className:"detail-img-container",children:Object(T.jsx)("img",{src:n.image,alt:n.name,width:"500px",height:"400px"})})]})]})}var k=n(35),I=(n(62),function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(E.a)(r,2),s=i[0],o=i[1],j=Object(a.useState)(""),u=Object(E.a)(j,2),d=u[0],b=u[1],h=Object(a.useState)(""),p=Object(E.a)(h,2),m=p[0],O=p[1],f=Object(a.useState)(""),x=Object(E.a)(f,2),v=x[0],g=x[1],N=Object(a.useState)(""),y=Object(E.a)(N,2),S=y[0],D=y[1],w=Object(a.useState)(""),C=Object(E.a)(w,2),M=C[0],L=C[1],_=Object(a.useState)(""),A=Object(E.a)(_,2),F=A[0],I=A[1],P=Object(a.useState)(!1),G=Object(E.a)(P,2),R=G[0],B=G[1],z=Object(a.useState)([]),W=Object(E.a)(z,2),$=W[0],H=W[1],Z=Object(a.useState)(!1),J=Object(E.a)(Z,2),U=J[0],K=J[1],X=Object(a.useState)([]),Y=Object(E.a)(X,2),q=Y[0],Q=Y[1];Object(a.useEffect)((function(){fetch("/temperaments").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e.name}));H(t)})).catch((function(e){return console.error(e)}))}),[]);var V=/^([a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]+\s?)+$/g.test(n),ee=/^(ftp|http|https):\/\/[^ "]+$/g.test(s),te=/^[0-9]+(\.[0-9]{1,2})?$/g.test(m,d),ne=/^[0-9]+(\.[0-9]{1,2})?$/g.test(S,v),ae=/^[0-9]+(\.[0-9]{1,2})?$/g.test(F,M);return Object(T.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n&&s&&v&&S&&d&&m&&M&&F){var t={image:s,name:n,height:"".concat(v," - ").concat(S," "),weight:"".concat(d," - ").concat(m," "),life_span:"".concat(M," - ").concat(F," years"),temperament:q.join(", ")};fetch("/dogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return 200===e.status&&K(!0),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}else B(!0)},children:[Object(T.jsx)("h2",{children:"New Breed"}),Object(T.jsx)(l.b,{to:"/home",children:Object(T.jsx)("button",{id:"back",children:"Home"})}),Object(T.jsxs)("div",{className:"form-container-parts",children:[Object(T.jsxs)("div",{className:"form-container-part",children:[Object(T.jsxs)("div",{className:"form-input-container",id:"create-name-container",children:[Object(T.jsx)("label",{htmlFor:"nombre",children:"Name:"}),Object(T.jsx)("input",{type:"text",id:"nombre",value:n,onChange:function(e){var t=e.target.value;c(t)},className:V?"":"invalido"}),!V&&Object(T.jsx)("span",{className:"mensaje-error",children:"The name is invalid"})]}),Object(T.jsxs)("div",{className:"form-input-container",children:[Object(T.jsx)("label",{htmlFor:"url",children:"URL:"}),Object(T.jsx)("input",{type:"text",id:"url",value:s,onChange:function(e){var t=e.target.value;o(t)},className:ee?"":"invalido"}),!ee&&Object(T.jsx)("span",{className:"mensaje-error",children:"The url is invalid"})]}),Object(T.jsxs)("div",{id:"form-temperaments-container",children:[Object(T.jsx)("label",{htmlFor:"temperamento",children:"Temperament:"}),Object(T.jsxs)("select",{id:"temperamento",name:"temperamento",onChange:function(e){return Q([].concat(Object(k.a)(q),[e.target.value]))},children:[Object(T.jsx)("option",{value:"",children:"Select a temperament"}),$.map((function(e){return Object(T.jsx)("option",{value:e,children:e},e)}))]}),Object(T.jsx)("div",{className:"temperaments-select-container",children:q.map((function(e,t){return Object(T.jsxs)("div",{className:"div-temperament-container",children:[Object(T.jsx)("span",{children:e}),Object(T.jsx)("button",{className:"button-delete-temperament",onClick:function(){return function(e){var t=q.filter((function(t){return t!==e}));Q(t)}(e)},children:"X"})]},t)}))})]})]}),Object(T.jsxs)("div",{className:"form-container-part",children:[Object(T.jsxs)("div",{className:"form-input-container",id:"input-peso",children:[Object(T.jsx)("label",{htmlFor:"pesoMin",children:"Weight:"}),Object(T.jsxs)("div",{className:"input-maxmin",children:[Object(T.jsx)("input",{type:"text",id:"pesoMin",value:d,onChange:function(e){b(e.target.value)},placeholder:"Min",className:te?"":"invalido"}),Object(T.jsx)("span",{children:" - "}),Object(T.jsx)("input",{type:"text",id:"pesoMax",value:m,onChange:function(e){O(e.target.value)},placeholder:"Max",className:te?"":"invalido"})]}),!te&&Object(T.jsx)("span",{className:"mensaje-error",children:"Weight is invalid"})]}),Object(T.jsxs)("div",{className:"form-input-container",children:[Object(T.jsx)("label",{htmlFor:"alturaMin",children:"Height:"}),Object(T.jsxs)("div",{className:"input-maxmin",children:[Object(T.jsx)("input",{type:"text",id:"alturaMin",value:v,onChange:function(e){g(e.target.value)},placeholder:"Min",className:ne?"":"invalido"}),Object(T.jsx)("span",{children:" - "}),Object(T.jsx)("input",{type:"text",id:"alturaMax",value:S,onChange:function(e){D(e.target.value)},placeholder:"Max",className:ne?"":"invalido"})]}),!ne&&Object(T.jsx)("span",{className:"mensaje-error",children:"Height is invalid"})]}),Object(T.jsxs)("div",{className:"form-input-container",children:[Object(T.jsx)("label",{htmlFor:"life_spanMin",children:"Life Span:"}),Object(T.jsxs)("div",{className:"input-maxmin",children:[Object(T.jsx)("input",{type:"text",id:"life_spanMin",value:M,onChange:function(e){L(e.target.value)},placeholder:"Min",className:ae?"":"invalido"}),Object(T.jsx)("span",{children:" - "}),Object(T.jsx)("input",{type:"text",id:"life_spanMax",value:F,onChange:function(e){I(e.target.value)},placeholder:"Max",className:ae?"":"invalido"})]}),!ae&&Object(T.jsx)("span",{className:"mensaje-error",children:"Life span is invalid"})]})]})]}),Object(T.jsxs)("div",{className:"button-form-container",children:[R&&Object(T.jsx)("span",{className:"mensaje-error",children:"There are empty fields"}),Object(T.jsx)("button",{className:"button-create",type:"submit",children:"Enviar"}),U?Object(T.jsx)("span",{children:"New breed created"}):null]})]})});m.a.defaults.baseURL="http://localhost:3001/";var P=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(D.a,{exact:!0,path:"/",component:A}),Object(T.jsx)(D.a,{exact:!0,path:"/home",component:_}),Object(T.jsx)(D.a,{path:"/create",component:I}),Object(T.jsx)(D.a,{path:"/home/:id",component:F})]})};i.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(o.a,{store:S,children:Object(T.jsx)(l.a,{children:Object(T.jsx)(P,{})})})}),document.getElementById("root")),s()}},[[63,1,2]]]);
//# sourceMappingURL=main.2e01162a.chunk.js.map