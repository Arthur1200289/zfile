import{_ as q,V as J,r as h,o as O,a as _,f as w,h as e,e as l,p as s,u as d,k as Q,P as $,F as G,y as W,b as X,t as b,S as Z,U as ee,J as y}from"./index.b4965edf.js";import{aQ as te,m as x,r as oe}from"./base.dd187116.js";import{E as ae}from"./table-column.9dc01afd.js";import{E as le,a as ne,b as re,c as se,z as ie,f as de,h as pe,i as me}from"./zh-cn.1ad5b2e0.js";/* empty css              */import"./scrollbar.80bf440f.js";import{E as ue,a as ce}from"./select.99ee2dd1.js";import{E as _e}from"./popper.f9b3238f.js";import{E as fe,a as ge}from"./checkbox.98255269.js";import"./tooltip.f118fcb0.js";/* empty css                */import{E as he,a as we}from"./form-item.97f5ee0c.js";/* empty css               */import{E as be}from"./switch.8ec0d3dc.js";import{u as ve}from"./useLinkSetting.d88e7c37.js";import{l as ye}from"./admin-storage.38f2c67f.js";import{b as C}from"./route-block.9b0645f8.js";import{E as v}from"./request.fbc656d8.js";import{E as Ve}from"./index.15e73748.js";import{E as Ee}from"./index.660c2e40.js";import"./dayjs.min.fd60efc2.js";import"./index.36bd0c3d.js";import"./index.2780cda8.js";import"./index.7fa0be7b.js";import"./event.3ec63147.js";import"./debounce.87fb69a7.js";import"./isEqual.6ca38756.js";import"./index.d6071792.js";import"./event.776e7e11.js";import"./scroll.4b1eebeb.js";import"./validator.3e583080.js";import"./focus-trap.581e22c0.js";import"./index.c92ded65.js";import"./admin-setting.9c4c7925.js";import"./index.1eedb420.js";const D=u=>(Z("data-v-5b654d82"),u=u(),ee(),u),ke={class:"zfile-admin-down-link"},xe={class:"flex justify-between"},Ce=D(()=>s("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," \u76F4\u94FE\u65E5\u5FD7 ",-1)),De={key:0,class:"flex space-x-1.5 justify-center items-center cursor-pointer"},Le=D(()=>s("span",{class:"text-gray-400 text-sm font-bold"},"\u8BB0\u5F55\u4E0B\u8F7D\u65E5\u5FD7\uFF1A",-1)),ze={class:"mt-4"},Se={class:"flex justify-between space-x-20"},Ue={class:"text-gray-400"},Te=y("\u67E5\u8BE2"),Ke=y("\u6279\u91CF\u5220\u9664"),Re=y("\u5220\u9664"),L={__name:"log",setup(u){const{data:f,saveData:z,saveLoading:Ae}=ve(),t=J({shortKey:"",storageKey:null,page:1,limit:10,path:"",ip:"",userAgent:"",referer:"",date:"",dateFrom:"",dateTo:"",total:0}),S=n=>{t.limit=n,t.page=1,p()},U=n=>{t.page=n,p()},V=h(),p=()=>{t.date instanceof Array?(t.dateFrom=t.date[0],t.dateTo=t.date[1]):(t.dateFrom="",t.dateTo=""),de(t).then(n=>{V.value=n.data,t.total=n.dataCount})};O(()=>{p(),T()});const E=h(),T=()=>{ye().then(n=>{E.value=n.data})},K=n=>{pe(n).then(a=>{v.success("\u5220\u9664\u6210\u529F"),p()})},k=h(),R=()=>{let n=k.value.getSelectionRows();if(n.length===0){v.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E");return}Ve.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{let a=n.map(c=>c.id);me({id:a}).then(c=>{v.success("\u5220\u9664\u6210\u529F"),p()})})};return(n,a)=>{const c=be,A=ue,F=ce,i=he,m=Ee,I=le,g=oe,P=we,r=fe,B=_e,M=ne,N=ge,j=re,Y=se,H=ae;return _(),w("div",ke,[e(H,null,{default:l(()=>[s("div",xe,[Ce,d(f)?(_(),w("div",De,[Le,e(c,{onChange:d(z),"active-text":"\u662F","inline-prompt":"","inactive-text":"\u5426",modelValue:d(f).recordDownloadLog,"onUpdate:modelValue":a[0]||(a[0]=o=>d(f).recordDownloadLog=o)},null,8,["onChange","modelValue"])])):Q("",!0)]),s("div",ze,[e(P,{inline:"",modelValue:t,"onUpdate:modelValue":a[8]||(a[8]=o=>$(t)?t.value=o:null)},{default:l(()=>[e(i,{label:"\u5B58\u50A8\u6E90"},{default:l(()=>[e(F,{clearable:"",teleported:!1,modelValue:t.storageKey,"onUpdate:modelValue":a[1]||(a[1]=o=>t.storageKey=o)},{default:l(()=>[(_(!0),w(G,null,W(E.value,o=>(_(),X(A,{key:o.id,label:o.name,value:o.key},{default:l(()=>[s("div",Se,[s("span",null,b(o.name),1),s("span",Ue,b(o.type.description),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u77ED\u94FE Key"},{default:l(()=>[e(m,{modelValue:t.shortKey,"onUpdate:modelValue":a[2]||(a[2]=o=>t.shortKey=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6587\u4EF6\u540D"},{default:l(()=>[e(m,{modelValue:t.path,"onUpdate:modelValue":a[3]||(a[3]=o=>t.path=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"\u8BF7\u6C42 IP"},{default:l(()=>[e(m,{modelValue:t.ip,"onUpdate:modelValue":a[4]||(a[4]=o=>t.ip=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"UserAgent"},{default:l(()=>[e(m,{modelValue:t.userAgent,"onUpdate:modelValue":a[5]||(a[5]=o=>t.userAgent=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"Referer"},{default:l(()=>[e(m,{modelValue:t.referer,"onUpdate:modelValue":a[6]||(a[6]=o=>t.referer=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:l(()=>[e(I,{modelValue:t.date,"onUpdate:modelValue":a[7]||(a[7]=o=>t.date=o),type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue","default-time"])]),_:1}),e(i,null,{default:l(()=>[e(g,{type:"primary",icon:d(te),onClick:p},{default:l(()=>[Te]),_:1},8,["icon"])]),_:1})]),_:1},8,["modelValue"]),s("div",null,[e(g,{onClick:R,icon:d(x),type:"danger"},{default:l(()=>[Ke]),_:1},8,["icon"])]),e(N,{ref_key:"linkTableRef",ref:k,size:"large",data:V.value},{default:l(()=>[e(r,{type:"selection",width:"55"}),e(r,{width:"120",label:"\u5B58\u50A8\u6E90\u540D\u79F0"},{default:l(o=>[e(B,{content:o.row.storageType.description,placement:"right"},{default:l(()=>[s("span",null,b(o.row.storageName),1)]),_:2},1032,["content"])]),_:1}),e(r,{"show-tooltip-when-overflow":"",prop:"shortKey",label:"\u77ED\u94FE key"}),e(r,{"show-tooltip-when-overflow":"",prop:"path",label:"\u8DEF\u5F84"}),e(r,{width:"100","show-tooltip-when-overflow":"",prop:"ip",label:"\u8BF7\u6C42 ip"}),e(r,{width:"180","show-tooltip-when-overflow":"",prop:"userAgent",label:"UserAgent"}),e(r,{width:"150","show-tooltip-when-overflow":"",prop:"referer",label:"Referer"}),e(r,{width:"180",prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),e(r,{width:"100",label:"\u64CD\u4F5C"},{default:l(o=>[e(M,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?",onConfirm:Fe=>K(o.row.id)},{reference:l(()=>[e(g,{icon:d(x),type:"danger"},{default:l(()=>[Re]),_:1},8,["icon"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),e(Y,{locale:d(ie)},{default:l(()=>[e(j,{class:"mt-3","page-size":t.limit,background:"",layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:U,onSizeChange:S,"current-page":t.page,"onUpdate:current-page":a[9]||(a[9]=o=>t.page=o),"default-current-page":10,"page-sizes":[10,50,100,200,1e3,99999999],total:t.total},null,8,["page-size","current-page","total"])]),_:1},8,["locale"])])]),_:1})])}}};typeof C=="function"&&C(L);var wt=q(L,[["__scopeId","data-v-5b654d82"]]);export{wt as default};
