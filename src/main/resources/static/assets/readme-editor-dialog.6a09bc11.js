import{Z as h,a2 as r,r as E,o as g,a as w,b as y,e as s,p as b,h as u,u as D,J as c}from"./index.b4965edf.js";import{r as P}from"./base.dd187116.js";import{E as T}from"./dialog.503ac11c.js";import"./overlay.36916e3d.js";/* empty css               */import"./index.1eedb420.js";import"./scroll.4b1eebeb.js";import"./index.36bd0c3d.js";import"./focus-trap.581e22c0.js";import"./refs.b0cca490.js";import"./event.776e7e11.js";const A={class:"dialog-footer"},x=c("\u53D6\u6D88"),B=c("\u4FDD\u5B58"),J={__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup(f,{emit:l}){const d=f,v=h(()=>new Promise((m,t)=>{(async function(){try{const e=await r(()=>import("./base-editor.f0f0c25b.js").then(function(a){return a.b}),["assets/base-editor.f0f0c25b.js","assets/index.b4965edf.js","assets/index.b549c954.css","assets/vue.runtime.esm-bundler.b94d4a04.js"]);await r(()=>Promise.resolve({}),["assets/base-editor.59951ec0.css"]),await r(()=>Promise.resolve({}),["assets/vuepress.5dbd54dc.css"]);const n=await r(()=>import("./vuepress.154570e2.js").then(function(a){return a.v}),["assets/vuepress.154570e2.js","assets/index.b4965edf.js","assets/index.b549c954.css"]),o=await r(()=>import("./prism.09d0ed3e.js").then(function(a){return a.p}),["assets/prism.09d0ed3e.js","assets/index.b4965edf.js","assets/index.b549c954.css"]);e.use(n,{Prism:o}),m(e)}catch(e){t(e)}})()})),i=E(""),_=!0;g(()=>{i.value=d.modelValue});const p=()=>{l("update:visible",!1)},V=()=>{l("update:modelValue",i.value),l("update:visible",!1)};return(m,t)=>{const e=P,n=T;return w(),y(n,{modelValue:_,"onUpdate:modelValue":t[1]||(t[1]=o=>_=o),"destroy-on-close":!0,onClose:p,title:d.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:s(()=>[b("span",A,[u(e,{onClick:p},{default:s(()=>[x]),_:1}),u(e,{type:"primary",onClick:V},{default:s(()=>[B]),_:1})])]),default:s(()=>[u(D(v),{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),height:"70vh"},null,8,["modelValue"])]),_:1},8,["title"])}}};export{J as default};
