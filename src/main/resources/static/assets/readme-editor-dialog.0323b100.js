import{Z as h,a2 as r,r as E,o as g,a as w,b as y,e as s,p as b,h as u,u as D,J as c}from"./index.f883e59e.js";import{r as P}from"./base.203c5653.js";import{E as T}from"./dialog.2896409d.js";import"./overlay.05878ded.js";/* empty css               */import"./index.a1317908.js";import"./scroll.cd049cdb.js";import"./index.9499933b.js";import"./focus-trap.b3dee7bc.js";import"./refs.6c57493b.js";import"./event.776e7e11.js";const A={class:"dialog-footer"},x=c("\u53D6\u6D88"),B=c("\u4FDD\u5B58"),J={__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup(f,{emit:l}){const d=f,v=h(()=>new Promise((m,t)=>{(async function(){try{const e=await r(()=>import("./base-editor.d01b2b39.js").then(function(a){return a.b}),["assets/base-editor.d01b2b39.js","assets/index.f883e59e.js","assets/index.26bc38fe.css","assets/vue.runtime.esm-bundler.a4c1ef1f.js"]);await r(()=>Promise.resolve({}),["assets/base-editor.59951ec0.css"]),await r(()=>Promise.resolve({}),["assets/vuepress.5dbd54dc.css"]);const n=await r(()=>import("./vuepress.f4c182f5.js").then(function(a){return a.v}),["assets/vuepress.f4c182f5.js","assets/index.f883e59e.js","assets/index.26bc38fe.css"]),o=await r(()=>import("./prism.905911bc.js").then(function(a){return a.p}),["assets/prism.905911bc.js","assets/index.f883e59e.js","assets/index.26bc38fe.css"]);e.use(n,{Prism:o}),m(e)}catch(e){t(e)}})()})),i=E(""),_=!0;g(()=>{i.value=d.modelValue});const p=()=>{l("update:visible",!1)},V=()=>{l("update:modelValue",i.value),l("update:visible",!1)};return(m,t)=>{const e=P,n=T;return w(),y(n,{modelValue:_,"onUpdate:modelValue":t[1]||(t[1]=o=>_=o),"destroy-on-close":!0,onClose:p,title:d.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:s(()=>[b("span",A,[u(e,{onClick:p},{default:s(()=>[x]),_:1}),u(e,{type:"primary",onClick:V},{default:s(()=>[B]),_:1})])]),default:s(()=>[u(D(v),{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),height:"70vh"},null,8,["modelValue"])]),_:1},8,["title"])}}};export{J as default};