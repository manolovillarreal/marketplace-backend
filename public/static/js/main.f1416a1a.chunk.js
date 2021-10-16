(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(32),r=c.n(a),A=c(3),s=Object(n.createContext)(),i=c(2),o={authChecking:"[auth] Checking login state",authCheckingFinis:"[auth] Finish checking login state",authStarLogin:"[auth] Start login",authLogin:"[auth] Login",authStartRegister:"[auth] Start Register",authStartTokenRenew:"[auth] Start token renew",authLogout:"[auth] Logout"},l="ADMIN_ROLE",d="SELLER_ROLE",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.authLogin:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{logged:!0,checking:!1});case o.authLogout:return{logged:!1,checking:!0};default:return e}},u=c(13),b=c(10),x=c(9),g=c.n(x),h=c(18),O="https://manuelvillarreal-marketplace.herokuapp.com/api",p=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(O,"/").concat(e);return"GET"===c?fetch(n):fetch(n,{method:c,headers:{"content-type":"application/json"},body:JSON.stringify(t)})},k=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(O,"/").concat(e),a=localStorage.getItem("token")||"";return"GET"===c?fetch(n,{method:c,headers:{"x-token":a}}):fetch(n,{method:c,headers:{"content-type":"application/json","x-token":a},body:JSON.stringify(t)})},m=function(){var e=Object(h.a)(g.a.mark((function e(t,c,n){var a,r,A,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/login",{email:t,password:c},"POST");case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,a.ok?(A=r.token,s=r.user,console.log(r),localStorage.setItem("token",A),localStorage.setItem("token-init-date",(new Date).getTime()),n(v(s))):console.log(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(g.a.mark((function e(t,c,n,a,r){var A,s,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{name:t,email:c,password:n,role:a},"POST");case 2:return A=e.sent,e.next=5,A.json();case 5:return s=e.sent,A.ok?(i=s.token,o=s.user,console.log(s),localStorage.setItem("token",i),localStorage.setItem("token-init-date",(new Date).getTime()),r(v(o))):console.log(s),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,c,n,a,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(h.a)(g.a.mark((function e(t){var c,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("auth/renew");case 2:return c=e.sent,e.next=5,c.json();case 5:(n=e.sent).ok?(a=n.user,r=n.token,localStorage.setItem("token",r),localStorage.setItem("token-init-date",(new Date).getTime()),t(v(a))):t({type:o.authLogout});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e({type:o.authLogout}),t.replace("/")},v=function(e){return{type:o.authLogin,payload:e}},B=c(1),Q=function(e){var t=e.history,c=Object(n.useContext)(s).dispatch;return Object(B.jsxs)("div",{className:"container mt-5",children:[Object(B.jsx)("h1",{children:"Login"}),Object(B.jsx)("hr",{}),Object(B.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";c({type:o.login,payload:{name:"Manuel"}}),t.replace(e)},children:"Login"})]})},Y=function(e,t){var c=Object(n.useRef)(!0),a=Object(n.useState)({data:null,loading:!0,error:null}),r=Object(A.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return function(){c.current=!1}}),[]),Object(n.useEffect)((function(){i({data:null,loading:!0,error:null});var n={};t&&(n["x-token"]=localStorage.getItem("token")),fetch(e,{method:"GET",headers:n}).then((function(e){return e.json()})).then((function(e){c.current&&i({loading:!1,error:null,data:e})})).catch((function(){i({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e,t]),s},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"es-us",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"USD",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return new Intl.NumberFormat(t,{style:"currency",currency:c,minimumFractionDigits:n}).format(e)},H=function(e){e.id;var t=e.name,c=e.sku,n=e.price;e.user;return Object(B.jsx)("div",{className:"card m-3",style:{maxWidth:230},children:Object(B.jsxs)("div",{className:"row g-0",children:[Object(B.jsx)("div",{className:"col-12 ",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAARAklEQVR4nO3cP6zleV3G8QMKCXtnNGCiMaG1MNlCKykIxAITGhoye2fDRohLTIhCJ9hRAo0JwURLCmIhNpZSWGihlY2Jhe0mGDtDiIny58O5QGIgrMye+3zP7/f8zuuVvOuZufs9Z57JJp/TCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjML52evefJ6fnXzv21lOru9MrLW79t2MLD29/686fD9bWHv6sXPdj7Pz7/AiOlOr+pf3/36dkvL3mwsFO/cvrI07vT83/b+vOnY3V+U3+09OE+Od1/des/pI7VeQT87flpvW3pw4X9eNv5zf/N1p87Ha37v7rC2332rvMv9C/b/2F1sD57hccLmzt/f35uB583Hat//bXTa3dXecBPT6/+xt3p+X/t4A+t4/Td85v60FUeMGzk7vTK757f+nd28HnTQTp/b37rPCp/86oP+enp+UfOv/j3t/7D60jd/+e7Th9771UfMlzJS6eP/fr5jX9z+8+ZDtT57+BXP7rJgz4vjy/u4AegA3V3uv/n0+nZOzd50LDMH77j/Lb/cevPl47V+e/gL2z4qD//9vNv4u+2/iHocH1lw0cNced/+f/5Dj5XOlZ/fzp98Bc3fdh3p9d+9fy439jBD0MH6qXT849v+rAh5PyvtFe3/jzpaN1/8+F/KW39tn/o6en575x/U/+z/Q9FB+q/zyPgt7d+2/AYD8d+7k73397B50mH6f5/n5xeff/Wb/snOBKkdI4E0cyxH61o+bGfSzkSpHSOBFHKsR8t6CrHfi7lSJCW5EgQVRz70YKud+znUo4EaUGOBFHDsR+l2+TYz6UcCVI+R4LYP8d+tKDtjv1cypEgpXMkiH1z7Ef5Nj72cylHgrQkR4LYJcd+tKDtj/1cypEgrciRIPbGsR/l29Gxn0s5EqQFORLEbjj2o3w7PPZzKUeClM6RIPbAsR+taLfHfi7lSJDSORLExhz70YJ2feznUo4EaUmOBLEJx360oP0f+7mUI0Fa0HdfOt3/3tZvm9vi2I/SVR37uZQjQcrnSBDX49iPFtR37OdSd6f7L+3gB64D5UgQ1+HYj/I9HM7b+mVf0bNfeOJIkPI5EsRSjv1oQb3Hfi7lSJBW5EgQqzj2o3wHOPZzKUeCtCBHgohz7Ef5DnTs51KOBCmdI0EkOfajFR3u2M+lHAlSOkeCCHHsRws65LGfSzkSpCU5EsSjOPajBR332M+lHAnSghwJ4mKO/SjdTRz7uZQjQcrnSBBvnWM/WtDtHPu5lCNBSudIEG+NYz/Kd2PHfi7lSJCW5EgQL8SxHy3o9o79XMqRIK3IkSB+Hsd+lO+Gj/1cypEgLciRIN6UYz/K59jPxRwJUjpHgvhZHPvRihz7eSRHgpTOkSB+imM/WpBjPwGOBGlJjgTxQ479aEGO/aQ4EqQFORKEYz+K59jPAo4EKZ8jQbfMsR8tyLGfVRwJUjpHgm6VYz/K59jPUg9Hgu6/sfV/ZB0uR4JujGM/WpBjP6s5EqQVORJ0Oxz7UT7Hfq7GkSAtyJGgG+DYj/I59nN1jgQpnSNBx+bYj1bk2M9GHAlSOkeCDsuxHy3IsZ8NORKkFd1/buuXTdb5v+mfbv+udLAc+9maI0HKd/89R4KOw7EfpXPsZ0ccCVI+R4KOwLEfLcixn71xJEjpHAlq59iP8jn2s0uOBGlJjgSVcuxHC3LsZ68cCdKKHAnq49iP8jn2s3uOBGlBjgQVcexH+Rz7qeFIkNI5EtTBsR+tyLGfMo4EKZ0jQbvn2I8W5NhPIUeCtCJHgvbKsR8tyLGfVo4EKZ8jQXvk2I/SOfZzAI4EKZ8jQXvi2I8W5NjPUTgSpHSOBO2FYz/K59jPoTgSpCU5ErQxx360IMd+jsaRIK3IkaDtOPajBf2HYz8H9fT0yvueOBKkbI4EbcCxH+Vz7OfwHAlSOkeCrsuxH63IsZ8b4UiQ0jkSdDWO/WhBjv3cEEeCtCJHglZz7EcLcuzn1jgSpHyOBK3k2I/SOfZzwxwJUj5HglZw7EcLcuzn1jkSpHSOBKU59qN8jv1wciRIi3IkKMSxHy3IsR9+xJEgrciRoMdz7EcLcuyHn+RIkBbkSNAjOPajfI798CbO/9r49PYPVEfKkaDLOPajFT0cgtv6bbNjjgQpnSNBb5ljP1qQYz/8XI4EaUWOBL0ox360IMd+eDGOBCmfI0EvwrEfpXPsh7fMkSDlcyTo/+PYjxbk2A+XcSRI6RwJejOO/SifYz88giNBWpIjQT/FsR8tyLEfHseRIK3IkaD/49iPFuTYDxmOBGlBjgSdHPvRihz7IcyRIKW79SNBjv1oRY79sIQjQUp3w0eCHPvRghz7YRlHgrSi2zsS5NiPFuTYD2s5EqR8t3UkyLEfpXPsh6txJEj5buNIkGM/WpBjP1yXI0FKd/wjQY79KJ9jP2zAkSAt6bBHghz70YIc+2EbjgRpRUc8EuTYjxbk2A/bciRICzrUkSDHfpTPsR92wpEgpTvKkSDHfrQix37YFUeClO4AR4Ic+9GCHPthdxwJ0op6jwQ59qMFOfbDPjkSpHydR4Ic+1E6x37YPUeClK/rSJBjP1qQYz90+PL7/+Av/+IDr/+TlOofPvqpb8xnPvP1hh5+r1v/vHSsHr5Tt/5ehxfy4y/CkSRF+vrW3+vwQsYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB3GAJCkZAYAHcYAkKRkBgAdxgCQpGQGAB0+/N7ff+PJ6flIkh7fw3fq1t/r8EIMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADUMAEnKZQBQwwCQpFwGADX+5Lde/+SnX/7En0mSHt/Dd+rW3+sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD78AP6FC4JHOZ/OQAAAABJRU5ErkJggg==",className:"img-fluid rounded-start",alt:t})}),Object(B.jsxs)("div",{className:"col text-center",children:[Object(B.jsx)("h5",{className:"card-title ",children:t}),Object(B.jsx)("p",{className:"card-text",children:c}),Object(B.jsx)("p",{className:"card-text",children:Object(B.jsx)("small",{className:"text-muted",children:R(n)})})]})]})})},K=function(e){var t=e.productsList,c=void 0===t?[]:t;return Object(B.jsx)("div",{className:"row row-cols-auto animate__animated animate__fadeIn",children:c.map((function(e){return Object(B.jsx)(H,Object(i.a)({},e),e.id)}))})},S=c(119),w=c(114),J=c(77),y=c(38),N=c.n(y),Z=c(7),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(A.a)(t,2),a=c[0],r=c[1],s=function(){r(e)},o=function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},a),{},Object(Z.a)({},t.name,t.value)))};return[a,o,s]},P=function(e){e.setProductList;var t=Object(b.g)(),c=Object(b.h)(),n=N.a.parse(c.search),a=n.q,r=void 0===a?"":a,s=n.maxPrice,i=n.minPrice,o=E({searchText:r}),l=Object(A.a)(o,2),d=l[0].searchText,j=l[1];return Object(B.jsx)("div",{className:"row",children:Object(B.jsx)("div",{className:"col-8",children:Object(B.jsx)(S.a,{onSubmit:function(e){e.preventDefault();var c="";d&&(c="q="+d),s&&(c+="&maxPrice="+s),i&&(c+="&minPrice="+i),t.push("?".concat(c))},children:Object(B.jsxs)(w.a,{className:"mb-3",children:[Object(B.jsx)(S.a.Control,{name:"searchText",type:"text",placeholder:"Buscar por nombre y/o SKU",className:"form-control",autoComplete:"off",value:d,onChange:j}),Object(B.jsx)(J.a,{type:"submit",variant:"secondary",children:"Search..."})]})})})})},I="".concat("https://manuelvillarreal-marketplace.herokuapp.com/api","/products"),L=function(){var e=Object(n.useState)([]),t=Object(A.a)(e,2),c=t[0],a=t[1],r=Object(b.h)(),s=Y(I+"/"+r.search),i=s.data,o=s.loading;return Object(n.useEffect)((function(){i&&i.ok&&a(i.products)}),[i,o]),Object(B.jsxs)("div",{children:[Object(B.jsx)(P,{}),Object(B.jsx)("hr",{}),o?Object(B.jsx)("h3",{children:" cargando ..."}):c.length>0?Object(B.jsx)(K,{productsList:c}):Object(B.jsx)("h3",{children:"No hay informacion"})]})},F=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"OrdersScreen"}),Object(B.jsx)("hr",{})]})},z=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Quote Screen"}),Object(B.jsx)("hr",{})]})},T=c.p+"static/media/store.52178c71.png",D=c(118),M=c(115),U=function(e){var t=e.handleCloseModal,c=Object(n.useContext)(s).dispatch,a=Object(n.useState)(!1),r=Object(A.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)({show:!1,message:""}),d=Object(A.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(!1),x=Object(A.a)(b,2),O=x[0],p=x[1],k=function(){o(!1),t()},C=E({email:"",password:""}),G=Object(A.a)(C,2),f=G[0],v=f.email,Q=f.password,Y=G[1],R=function(){var e=Object(h.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget,u({show:!1,message:""}),p(!0),!0!==n.checkValidity()){e.next=9;break}return e.next=7,m(v,Q,c);case 7:(a=e.sent).user?k():(console.log(a),u({show:!0,message:a.msg}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o(!0)}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(D.a,{show:i,onHide:k,centered:!0,children:[Object(B.jsx)(D.a.Header,{closeButton:!0,children:Object(B.jsx)(D.a.Title,{children:"Inicio de Sesion"})}),Object(B.jsx)(D.a.Body,{children:Object(B.jsxs)(S.a,{noValidate:!0,validated:O,onSubmit:R,children:[Object(B.jsxs)(S.a.Group,{className:"mb-3",children:[Object(B.jsx)(S.a.Label,{children:"Correo"}),Object(B.jsx)(S.a.Control,{name:"email",type:"email",value:v,onChange:Y,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese su correo."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-3",children:[Object(B.jsx)(S.a.Label,{children:"Contrase\xf1a"}),Object(B.jsx)(S.a.Control,{name:"password",type:"password",value:Q,onChange:Y,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese su contrase\xf1a."})]}),Object(B.jsx)(J.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(B.jsx)(D.a.Footer,{children:Object(B.jsx)(M.a,{variant:"danger",show:j.show,style:{flex:1},children:j.message})})]})})},q=function(e){var t=e.handleCloseModal,c=e.role,a=Object(n.useContext)(s).dispatch,r=Object(n.useState)(!1),i=Object(A.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)({show:!1,errors:[]}),j=Object(A.a)(d,2),u=j[0],b=j[1],x=Object(n.useState)(!1),O=Object(A.a)(x,2),p=O[0],k=O[1],m=Object(n.useRef)(null),G=Object(n.useRef)(null),f=E({name:"",email:"",password:"",confirm:""}),v=Object(A.a)(f,2),Q=v[0],Y=Q.name,R=Q.email,H=Q.password,K=Q.confirm,w=v[1],y=function(){l(!1),t()},N=function(){var e=Object(h.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget,k(!0),!0!==n.checkValidity()||!Z()){e.next=8;break}return e.next=6,C(Y,R,H,c,a);case 6:(r=e.sent).user?y():(console.log(r),b({show:!0,errors:r.errors}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=!1;return H.length>=8&&(H!==K?(k(!1),G.current.classList.contains("is-invalid")||G.current.classList.add("is-invalid")):(e=!0,G.current.classList.contains("is-invalid")&&G.current.classList.remove("is-invalid"),G.current.classList.contains("is-valid")||G.current.classList.add("is-valid"))),e};return Object(n.useEffect)((function(){l(!0)}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(D.a,{show:o,onHide:y,centered:!0,children:[Object(B.jsx)(D.a.Header,{closeButton:!0,children:Object(B.jsx)(D.a.Title,{children:"Crea una Cuenta"})}),Object(B.jsx)(D.a.Body,{children:Object(B.jsxs)(S.a,{noValidate:!0,validated:p,onSubmit:N,children:[Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Nombre"}),Object(B.jsx)(S.a.Control,{name:"name",type:"text",value:Y,onChange:w,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un nombre."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Correo"}),Object(B.jsx)(S.a.Control,{name:"email",type:"email",value:R,onChange:w,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un correo valido."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Contrase\xf1a"}),Object(B.jsx)(S.a.Control,{name:"password",type:"password",value:H,onChange:w,required:!0,minLength:"8",ref:m}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese al menos 8 digitos para su contrase\xf1a."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Confirmar conntrase\xf1a"}),Object(B.jsx)(S.a.Control,{name:"confirm",type:"password",value:K,onChange:w,required:!0,minLength:"8",ref:G}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Las contrase\xf1as no coinciden."})]}),Object(B.jsx)(J.a,{variant:"primary",type:"submit",className:"mt-2",children:"Submit"})]})}),Object(B.jsx)(D.a.Footer,{children:Object(B.jsx)(M.a,{variant:"danger",show:u.show,style:{flex:1},children:u.errors.map((function(e,t){return Object(B.jsxs)("li",{children:[Object(B.jsx)("small",{children:e.msg})," "]},t)}))})})]})})},V=function(e){var t=e.handleCloseModal,c=e.handleLogin,a=e.handleRegister,r=Object(n.useState)(!1),s=Object(A.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){o(!0)}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(D.a,{show:i,onHide:function(){o(!1),t()},centered:!0,children:[Object(B.jsx)(D.a.Header,{closeButton:!0,children:Object(B.jsx)(D.a.Title,{children:"Crea una Cuenta"})}),Object(B.jsx)(D.a.Body,{children:"Registrate o inicia sesion para empezar a agregar productos"}),Object(B.jsxs)(D.a.Footer,{children:[Object(B.jsx)(J.a,{variant:"light",onClick:c,children:"INICIA SESION"}),Object(B.jsx)(J.a,{variant:"secondary",onClick:a,children:"REGISTRATE"})]})]})})},X=function(e){var t=e.handleCloseModal,c=Object(n.useState)(!1),a=Object(A.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(A.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)(!1),u=Object(A.a)(j,2),b=u[0],x=u[1],g=function(){t()};return Object(n.useEffect)((function(){s(!0)}),[]),Object(B.jsxs)(B.Fragment,{children:[r&&Object(B.jsx)(V,{handleCloseModal:g,handleLogin:function(){s(!1),d(!0)},handleRegister:function(){s(!1),x(!0)}}),!r&&l&&Object(B.jsx)(U,{handleCloseModal:g}),!r&&b&&Object(B.jsx)(q,{handleCloseModal:g,role:"SELLER_ROLE"})]})},W=c(39),_=function(){var e=Object(h.a)(g.a.mark((function e(t,c,n,a){var r,A;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("products",{name:t,sku:c,price:n,stock:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:return A=e.sent,console.log(A),e.abrupt("return",A);case 8:case"end":return e.stop()}}),e)})));return function(t,c,n,a){return e.apply(this,arguments)}}(),$=function(){var e=Object(h.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("products/store/mine","GET");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,console.log(c),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){var t=e.setShowModal,c=e.setProductsList,a=Object(n.useState)(!1),r=Object(A.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)({show:!1,errors:[]}),l=Object(A.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(!1),b=Object(A.a)(u,2),x=b[0],O=b[1],p=E({name:"",sku:"",price:0,stock:0}),k=Object(A.a)(p,2),m=k[0],C=m.name,G=m.sku,f=m.price,v=m.stock,Q=k[1],Y=function(){i(!1),t(!1)},R=function(){var e=Object(h.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget,O(!0),!0!==n.checkValidity()){e.next=8;break}return e.next=6,_(C,G,f,v);case 6:(a=e.sent).ok?(c((function(e){return[].concat(Object(W.a)(e),[a.product])})),Y()):(console.log(a),j({show:!0,errors:a.errors}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return i(!0),function(){}}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(D.a,{show:s,onHide:Y,centered:!0,children:[Object(B.jsx)(D.a.Header,{closeButton:!0,children:Object(B.jsx)(D.a.Title,{children:"Crea una Cuenta"})}),Object(B.jsx)(D.a.Body,{children:Object(B.jsxs)(S.a,{noValidate:!0,validated:x,onSubmit:R,children:[Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Nombre"}),Object(B.jsx)(S.a.Control,{name:"name",type:"text",value:C,onChange:Q,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un nombre."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"SKU"}),Object(B.jsx)(S.a.Control,{name:"sku",type:"text",value:G,onChange:Q,required:!0}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese el codigo sku para su producto."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Precio"}),Object(B.jsx)(S.a.Control,{name:"price",type:"number",value:f,onChange:Q,required:!0,min:"0"}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Por favor asigne un precio a su producto."})]}),Object(B.jsxs)(S.a.Group,{className:"mb-1",children:[Object(B.jsx)(S.a.Label,{children:"Cantidad"}),Object(B.jsx)(S.a.Control,{name:"stock",type:"number",value:v,onChange:Q,required:!0,min:"0"}),Object(B.jsx)(S.a.Control.Feedback,{type:"invalid",children:"Las contrase\xf1as no coinciden."})]}),Object(B.jsx)(J.a,{variant:"primary",type:"submit",className:"mt-2",children:"Submit"})]})}),Object(B.jsx)(D.a.Footer,{children:Object(B.jsx)(M.a,{variant:"danger",show:d.show,style:{flex:1},children:d.errors.map((function(e,t){return Object(B.jsxs)("li",{children:[Object(B.jsx)("small",{children:e.msg})," "]},t)}))})})]})})},te=c(116),ce=function(e){var t=e.productsList,c=void 0===t?[]:t;return Object(B.jsxs)(te.a,{responsive:!0,children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Nombre"}),Object(B.jsx)("th",{children:"SKU"}),Object(B.jsx)("th",{children:"Cantidad"}),Object(B.jsx)("th",{children:"Price"})]})}),Object(B.jsx)("tbody",{children:c.map((function(e){return Object(B.jsxs)("tr",{children:[Object(B.jsxs)("td",{children:[" ",e.name," "]}),Object(B.jsxs)("td",{children:[" ",e.sku," "]}),Object(B.jsxs)("td",{children:[" ",e.cantidad," "]}),Object(B.jsxs)("td",{children:[" ",e.price," "]}),Object(B.jsx)("td",{children:" ..."})]},e.id)}))})]})},ne=function(){var e=Object(n.useContext)(s).user,t=Object(n.useState)(!1),c=Object(A.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)([]),o=Object(A.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){var t=function(){var e=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:(t=e.sent).ok&&d(t.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e.logged&&t(),function(){}}),[e.logged]);var j=function(){r(!0)};return l.length>0&&console.log(K[0]),Object(B.jsxs)(B.Fragment,{children:[l.length>0?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:" text-end",children:Object(B.jsx)(J.a,{variant:"light",className:"ms-auto",onClick:j,children:"Crear Producto"})}),Object(B.jsx)(ce,{productsList:l})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"card mb-3",style:{maxWidth:540},children:Object(B.jsxs)("div",{className:"row g-0",children:[Object(B.jsx)("div",{className:"col-md-4",children:Object(B.jsx)("img",{src:T,className:"img-fluid rounded-start",alt:"..."})}),Object(B.jsx)("div",{className:"col-md-8",children:Object(B.jsxs)("div",{className:"card-body",children:[Object(B.jsx)("h2",{className:"card-title",children:"Crea tu Producto"}),Object(B.jsx)("p",{className:"card-text",children:"Organiza de manera profesional tu inventario"}),Object(B.jsx)(u.b,{to:"/",className:"card-text text-info",children:Object(B.jsx)("small",{children:"Conocer mas"})}),Object(B.jsx)("button",{onClick:j,className:"btn btn-light ms-5",children:"Crear Producto"})]})})]})}),!e.logged&&Object(B.jsx)("p",{className:"text-info btn",children:"inicia sesion para poder ver tu inventario"})]}),!e.logged&&a&&Object(B.jsx)(X,{handleCloseModal:function(){r(!1)}}),e.logged&&a&&Object(B.jsx)(ee,{setShowModal:r,setProductsList:d})]})},ae=c(48),re="".concat("https://manuelvillarreal-marketplace.herokuapp.com/api","/users/stores"),Ae=function(){var e=Object(n.useState)([]),t=Object(A.a)(e,2),c=t[0],a=t[1],r=Object(n.useRef)(null),s=Object(b.g)(),i=Object(b.h)(),o=N.a.parse(i.search,{arrayFormat:"index"}).stores,l=void 0===o?[]:o,d=Y(re+"/"+i.search,!0),j=d.data,u=d.loading;Object(n.useEffect)((function(){j&&j.ok&&a(j.users)}),[j,u]),Object(n.useEffect)((function(){if(null!=r){var e,t=Object(ae.a)(l);try{for(t.s();!(e=t.n()).done;){var c=e.value,n=document.getElementById(c);if(!n)break;n.checked=!0}}catch(a){t.e(a)}finally{t.f()}}}),[l,r]);var x=function(e){console.log(l),console.log(l.indexOf(e.target.id)),e.target.checked&&!l.includes(e.target.id)&&l.push(e.target.id),!e.target.checked&&l.includes(e.target.id)&&l.splice(l.indexOf(e.target.id),1),s.push("?".concat(N.a.stringify({stores:l},{arrayFormat:"index"})))};return Object(B.jsxs)("div",{id:"sidebar-nav",className:"list-group border-0 rounded-0 text-sm-start min-vh-100",children:[Object(B.jsx)("h4",{className:"m-3",children:"Fitros "}),Object(B.jsx)(S.a,{className:"m-3",ref:r,children:c.length>0&&Object(B.jsx)("div",{ref:r,children:null===c||void 0===c?void 0:c.map((function(e){return Object(B.jsx)("div",{children:Object(B.jsx)(S.a.Check,{type:"checkbox",id:e.name,label:e.name,onClick:x})},"store-".concat(e.uid))}))})})]})},se=c(76),ie=function(){var e=Object(n.useRef)(null),t=Object(b.g)(),c=Object(b.h)(),a=N.a.parse(c.search),r=a.q,s=void 0===r?"":r,i=a.maxPrice,o=void 0===i?"":i,l=a.minPrice,d=E({maxPrice:o,minPrice:void 0===l?"":l,range:0}),j=Object(A.a)(d,2),u=j[0],x=u.maxPrice,g=u.minPrice,h=u.range,O=j[1];return Object(B.jsxs)("div",{id:"sidebar-nav",className:"list-group border-0 rounded-0 text-sm-start min-vh-100",children:[Object(B.jsx)("h4",{className:"m-3",children:"Fitros "}),Object(B.jsxs)(S.a,{onSubmit:function(c){c.preventDefault(),console.log("filter");var n=s;isNaN(x)||(n+="&maxPrice="+x),isNaN(e.current.value)||(n+="&minPrice="+e.current.value),t.push("?q=".concat(n))},children:[Object(B.jsx)(se.a,{controlId:"floatingInput",label:"Precio Maximo",className:"m-3",children:Object(B.jsx)(S.a.Control,{name:"maxPrice",value:x,onChange:O,type:"number",placeholder:"$",size:"sm"})}),Object(B.jsxs)(S.a.Group,{className:"m-3",children:[Object(B.jsx)(se.a,{controlId:"floatingInput",label:"Precio Minimo",children:Object(B.jsx)(S.a.Control,{name:"minPrice",value:x>0?h*x/100:g,onChange:O,type:"number",placeholder:"$",size:"sm",ref:e})}),x>0&&Object(B.jsx)(S.a.Range,{name:"range",value:h,onChange:O})]}),Object(B.jsx)(S.a.Group,{className:"m-3 text-end",children:Object(B.jsx)(J.a,{type:"submit",variant:"secondary",children:"Search..."})})]})]})},oe=function(){return Object(B.jsxs)("div",{id:"sidebar-nav",className:"list-group border-0 rounded-0 text-sm-start min-vh-100",children:[Object(B.jsx)(u.c,{className:"list-group-item border-end-0 d-inline-block text-truncate",activeClassName:"active",exact:!0,to:"/dashboard",children:Object(B.jsx)("span",{children:"Dashboard"})}),Object(B.jsx)(u.c,{className:"list-group-item border-end-0 d-inline-block text-truncate",activeClassName:"active",exact:!0,to:"/cotizaciones",children:Object(B.jsx)("span",{children:"Cotizaciones"})}),Object(B.jsx)(u.c,{className:"list-group-item border-end-0 d-inline-block text-truncate",activeClassName:"active",exact:!0,to:"/ordenes",children:Object(B.jsx)("span",{children:"Ordenes"})}),Object(B.jsx)(u.c,{className:"list-group-item border-end-0 d-inline-block text-truncate",activeClassName:"active",exact:!0,to:"/inventario",children:Object(B.jsx)("span",{children:"Inventario"})})]})},le=function(){var e=Object(n.useContext)(s),t=e.user,c=e.dispatch,a=Object(b.g)();return Object(B.jsx)("div",{className:"col-auto px-0",children:Object(B.jsxs)("div",{id:"sidebar",className:"collapse collapse-horizontal show border-end",children:[!t.logged&&Object(B.jsx)(ie,{}),t.logged&&t.role===l&&Object(B.jsx)(Ae,{}),t.logged&&t.role===d&&Object(B.jsx)(oe,{}),t.logged&&Object(B.jsx)("button",{onClick:function(){f(c,a)},className:"btn text-danger mt-5",children:"cerrar sesion"})]})})},de=c(120),je=c(121),ue=c(117),be=function(){var e=Object(n.useContext)(s),t=e.user,c=e.dispatch,a=Object(n.useState)(!1),r=Object(A.a)(a,2),i=r[0],o=r[1],l=Object(b.g)();return Object(B.jsxs)(de.a,{bg:"light",expand:"sm",children:[Object(B.jsx)(de.a.Brand,{children:Object(B.jsx)(u.b,{className:"navbar-brand ms-2",to:"/",children:"Marketplace"})}),Object(B.jsx)(de.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(B.jsx)(de.a.Collapse,{id:"basic-navbar-nav",children:Object(B.jsxs)(je.a,{className:"ms-auto",children:[t.logged?Object(B.jsxs)(ue.a,{title:t.name,id:"basic-nav-dropdown",children:[Object(B.jsx)(ue.a.Item,{children:"Cuenta"}),Object(B.jsx)(ue.a.Item,{children:"..."}),Object(B.jsx)(ue.a.Divider,{}),Object(B.jsx)(ue.a.Item,{onClick:function(){f(c,l)},children:"cerrar sesion"})]}):Object(B.jsx)("button",{onClick:function(){o(!0)},className:"nav-item nav-link btn",children:"Iniciar Sesion"}),!t.logged&&i&&Object(B.jsx)(X,{handleCloseModal:function(){o(!1)}})]})})]})},xe=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(be,{}),Object(B.jsx)("div",{className:"container-fluid",children:Object(B.jsxs)("div",{className:"row flex-nowrap",children:[Object(B.jsx)(le,{}),Object(B.jsx)("main",{className:"col ms-5 pt-2",children:Object(B.jsxs)(b.d,{children:[Object(B.jsx)(b.b,{exact:!0,path:"/dashboard",component:L}),Object(B.jsx)(b.b,{exact:!0,path:"/cotizaciones",component:z}),Object(B.jsx)(b.b,{exact:!0,path:"/ordenes",component:F}),Object(B.jsx)(b.b,{exact:!0,path:"/inventario",component:ne}),Object(B.jsx)(b.a,{to:"/dashboard"})]})})]})})]})},ge=c(4),he=["isAuthenticated","component"],Oe=function(e){var t=e.isAuthenticated,c=e.component,n=Object(ge.a)(e,he);return Object(B.jsx)(b.b,Object(i.a)(Object(i.a)({},n),{},{component:function(e){return t?Object(B.jsx)(b.a,{to:"/"}):Object(B.jsx)(c,Object(i.a)({},e))}}))},pe=function(){var e=Object(n.useContext)(s),t=e.user,c=e.dispatch;return Object(n.useEffect)((function(){G(c)}),[c]),Object(B.jsx)(u.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(b.d,{children:[Object(B.jsx)(Oe,{exact:!0,path:"/login",component:Q,isAuthenticated:t.logged}),Object(B.jsx)(b.b,{path:"/",component:xe})]})})})},ke=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},me=function(){var e=Object(n.useReducer)(j,{},ke),t=Object(A.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(c))}),[c]),Object(B.jsx)(s.Provider,{value:{user:c,dispatch:a},children:Object(B.jsx)(pe,{})})};r.a.render(Object(B.jsx)(me,{}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.f1416a1a.chunk.js.map