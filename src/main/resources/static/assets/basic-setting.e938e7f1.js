import{A as P}from"./base.f9e60852.js";/* empty css                */import{Z as v,a as E}from"./ZFormItem.91aded87.js";/* empty css               */import{E as T}from"./input-number.f57e8352.js";/* empty css              */import{E as I}from"./radio.bdc7b396.js";import{E as U}from"./switch.9f84dbfb.js";import{r as z,a as b,f as g,u as e,J as p,b as R,e as t,L as r,m as i,j as a,t as w,K as k,E as A,k as D}from"./index.f20a2340.js";import{u as F}from"./useLinkSetting.df15fb8f.js";import{g as S}from"./admin-setting.c62e8d8e.js";import{E as C}from"./index.2085544e.js";import{v as B}from"./directive.eb3ba7ee.js";import"./index.5cf4e3bb.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./event.776e7e11.js";import"./index.4a39cc77.js";import"./validator.02bde218.js";import"./request.29c9df35.js";const N={class:"zfile-admin-down-link-body"},Z={class:"text-red-400 font-bold"},X=i("span",null,'\u662F\u5426\u5141\u8BB8\u672A\u901A\u8FC7 "\u751F\u6210\u76F4\u94FE" \u529F\u80FD\u7684\u76F4\u94FE\u53EF\u8BBF\u95EE (\u4EC5\u8868\u793A\u53EF\u8BBF\u95EE, \u5982\u672A\u5F00\u542F\u4E0A\u65B9 "\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u76F4\u94FE\uFF08\u8DEF\u5F84\uFF09" \u529F\u80FD\uFF0C\u5219\u5373\u4F7F\u8BBF\u95EE\u4E86\u4E5F\u4E0D\u5141\u8BB8\u4E0B\u8F7D.)',-1),H=i("br",null,null,-1),O=i("br",null,null,-1),W=i("span",null,"\u56E0\u8DEF\u5F84\u76F4\u94FE\u7684\u683C\u5F0F\u662F\u6587\u4EF6\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u6240\u4EE5\u5F88\u5BB9\u6613\u88AB\u731C\u5230\u5E76\u8BBF\u95EE, \u5982\u60A8\u4E0D\u60F3\u672A\u751F\u6210\u76F4\u94FE\u5C31\u53EF\u76F4\u63A5\u8BBF\u95EE\uFF0C\u53EF\u8003\u8651\u4F7F\u7528\u6B64\u529F\u80FD\u63A7\u5236.",-1),j=i("span",null,"\u5355 IP",-1),q=i("span",null,"\u79D2\u5185\u5141\u8BB8\u4E0B\u8F7D",-1),J=i("span",null,"\u6B21",-1),K=i("span",null,"\u8BBE\u7F6E\u76F4\u94FE\u9632\u6B62\u6076\u610F\u4E0B\u8F7D\uFF0C\u5355 IP N \u79D2\u5185\u53EA\u5141\u8BB8\u8BBF\u95EE M \u6B21\u76F4\u94FE\uFF0C\u5982\u5176\u4E2D\u4E00\u4E2A\u4E3A 0 \u5219\u4E0D\u505A\u4EFB\u4F55\u9650\u5236.",-1),M=i("br",null,null,-1),G=i("br",null,null,-1),Q=i("span",null,"\u6CE8\u610F\uFF1A\u6B64\u529F\u80FD\u5BF9\u76F4\u94FE\u3001\u77ED\u94FE\u90FD\u6709\u6548\uFF0C\u4E14\u5171\u4EAB\u9650\u5236\u6B21\u6570\u3002\u4F46\u76F4\u94FE/\u77ED\u94FE\u8DF3\u8F6C\u540E\u7684\u5B9E\u9645\u4E0B\u8F7D\u94FE\u63A5\u65E0\u6CD5\u9650\u5236\uFF0C\u56E0\u4E3A\u90A3\u4E9B\u94FE\u63A5\u4E0D\u7ECF\u8FC7 ZFile.",-1),Y=i("br",null,null,-1),$=i("br",null,null,-1),ee={class:"text-blue-400"},le={class:"dialog-footer"},Le={__name:"basic-setting",setup(te){const{data:l,saveData:c,saveLoading:h}=F(),u=z("");return S().then(f=>{u.value=f.data.data}),(f,o)=>{const _=C,s=v,d=U,m=I,V=T,y=P,L=E,x=B;return b(),g("div",N,[e(l)?p((b(),R(L,{key:0,model:e(l),"element-loading-text":"\u4FDD\u5B58\u4E2D..."},{"form-title":t(()=>[r(" \u76F4\u94FE\u8BBE\u7F6E ")]),"form-sub-title":t(()=>[r(" \u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u76F4\u94FE\u76F8\u5173\u8BBE\u7F6E ")]),footer:t(()=>[i("span",le,[a(y,{type:"primary",onClick:e(c)},{default:t(()=>[r("\u4FDD\u5B58")]),_:1},8,["onClick"])])]),default:t(()=>[a(s,{label:"\u76F4\u94FE\u5730\u5740\u524D\u7F00"},{tips:t(()=>[r(" \u76F4\u94FE\u5730\u5740\u524D\u7F00, \u5982 http(s)://ip:port/"),i("span",Z,w(e(l).directLinkPrefix),1),r("/path/filename ")]),default:t(()=>[a(_,{modelValue:e(l).directLinkPrefix,"onUpdate:modelValue":o[0]||(o[0]=n=>e(l).directLinkPrefix=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u663E\u793A\u751F\u6210\u76F4/\u77ED\u94FE\u529F\u80FD"},{tips:t(()=>[r(" \u4EC5\u63A7\u5236\u662F\u5426\u663E\u793A\u76F4/\u77ED\u94FE\u751F\u6210\u6309\u94AE\uFF0C\u4E0D\u5F71\u54CD\u4F7F\u7528\u5141\u8BB8\u4F7F\u7528\u76F4/\u77ED\u94FE\u4E0B\u8F7D ")]),default:t(()=>[a(d,{modelValue:e(l).showLinkBtn,"onUpdate:modelValue":o[1]||(o[1]=n=>e(l).showLinkBtn=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u8BB0\u5F55\u4E0B\u8F7D\u65E5\u5FD7"},{tips:t(()=>[r(" \u662F\u5426\u8BB0\u5F55\u76F4\u94FE\u4E0B\u8F7D\u65E5\u5FD7 ")]),default:t(()=>[a(d,{modelValue:e(l).recordDownloadLog,"onUpdate:modelValue":o[2]||(o[2]=n=>e(l).recordDownloadLog=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u77ED\u94FE"},{tips:t(()=>[r(" \u63A7\u5236\u662F\u5426\u751F\u6210\u76F4\u94FE\u65F6\u663E\u793A\u77ED\u94FE\u8DEF\u5F84\u53CA\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u77ED\u94FE\u8FDB\u884C\u4E0B\u8F7D ")]),default:t(()=>[a(d,{modelValue:e(l).showShortLink,"onUpdate:modelValue":o[3]||(o[3]=n=>e(l).showShortLink=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u76F4\u94FE\uFF08\u8DEF\u5F84\uFF09"},{tips:t(()=>[r(" \u63A7\u5236\u662F\u5426\u751F\u6210\u76F4\u94FE\u65F6\u663E\u793A\u76F4\u94FE\u8DEF\u5F84\u53CA\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u76F4\u94FE\u8FDB\u884C\u4E0B\u8F7D ")]),default:t(()=>[a(d,{modelValue:e(l).showPathLink,"onUpdate:modelValue":o[4]||(o[4]=n=>e(l).showPathLink=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u662F\u5426\u5141\u8BB8\u8DEF\u5F84\u76F4\u94FE\u53EF\u76F4\u63A5\u8BBF\u95EE"},{tips:t(()=>[X,H,O,W]),default:t(()=>[a(d,{modelValue:e(l).allowPathLinkAnonAccess,"onUpdate:modelValue":o[5]||(o[5]=n=>e(l).allowPathLinkAnonAccess=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"Referer \u9632\u76D7\u94FE"},{tips:t(()=>[r(" \u9632\u76D7\u94FE\u652F\u6301\u8BBF\u95EE\u6587\u4EF6\u76F4\u94FE\u6216\u77ED\u94FE\u65F6\u6821\u9A8C\uFF0C\u5982\u7528\u6237\u76F4\u63A5\u8BBF\u95EE\u76F4\u94FE\u8DF3\u8F6C\u540E\u7684\u5B58\u50A8\u6E90\u539F\u59CB\u94FE\u63A5\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6821\u9A8C\u548C\u62E6\u622A\u3002 ")]),default:t(()=>[a(m,{modelValue:e(l).refererType,"onUpdate:modelValue":o[6]||(o[6]=n=>e(l).refererType=n),label:"off"},{default:t(()=>[r("\u4E0D\u542F\u7528 Referer \u9632\u76D7\u94FE")]),_:1},8,["modelValue"]),a(m,{modelValue:e(l).refererType,"onUpdate:modelValue":o[7]||(o[7]=n=>e(l).refererType=n),label:"white_list"},{default:t(()=>[r("\u542F\u7528\u767D\u540D\u5355")]),_:1},8,["modelValue"]),a(m,{modelValue:e(l).refererType,"onUpdate:modelValue":o[8]||(o[8]=n=>e(l).refererType=n),label:"black_list"},{default:t(()=>[r("\u542F\u7528\u9ED1\u540D\u5355")]),_:1},8,["modelValue"])]),_:1}),p(a(s,{label:"Referer \u914D\u7F6E"},{default:t(()=>[a(m,{modelValue:e(l).refererAllowEmpty,"onUpdate:modelValue":o[9]||(o[9]=n=>e(l).refererAllowEmpty=n),label:!0},{default:t(()=>[r("\u5141\u8BB8 Referer \u4E3A\u7A7A")]),_:1},8,["modelValue"]),a(m,{modelValue:e(l).refererAllowEmpty,"onUpdate:modelValue":o[10]||(o[10]=n=>e(l).refererAllowEmpty=n),label:!1},{default:t(()=>[r("\u7981\u6B62 Referer \u4E3A\u7A7A")]),_:1},8,["modelValue"])]),_:1},512),[[k,e(l).refererType!=="no"]]),p(a(s,{label:"\u767D\u540D\u5355"},A({default:t(()=>[a(_,{type:"textarea",rows:6,placeholder:`\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D\uFF0C\u5982\uFF1A\r
http://*example.com\r
https://*example.com\r
https://a.*.example.com\r
*://*.example.com`,modelValue:e(l).refererValue,"onUpdate:modelValue":o[11]||(o[11]=n=>e(l).refererValue=n)},null,8,["modelValue"])]),_:2},[e(l).refererType==="white_list"?{name:"tips",fn:t(()=>[r(" \u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D\uFF0C\u9700\u8981\u5199\u534F\u8BAE\u5934\u652F\u6301 * \u901A\u914D\u7B26\uFF0C\u5982\u767D\u540D\u5355 http://*zfile.vip \u5C06\u53EA\u5141\u8BB8 http://zfile.vip\u3001http://www.zfile.vip\u3001http://demo.zfile.vip \u7B49\u7F51\u7AD9\u8BBF\u95EE\u3002 ")]),key:"0"}:void 0,e(l).refererType==="black_list"?{name:"tips",fn:t(()=>[r(" \u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D\uFF0C\u9700\u8981\u5199\u534F\u8BAE\u5934\uFF0C\u652F\u6301 * \u901A\u914D\u7B26\uFF0C\u5982\u9ED1\u540D\u5355 http://*zfile.vip \u5C06\u7981\u6B62\u6240\u6709\u5982 http://zfile.vip\u3001http://www.zfile.vip\u3001http://demo.zfile.vip \u7B49\u7F51\u7AD9\u8BBF\u95EE\u3002 ")]),key:"1"}:void 0]),1536),[[k,e(l).refererType!=="no"]]),a(s,{label:"\u76F4\u94FE\u4E0B\u8F7D\u9650\u5236"},{tips:t(()=>[K,M,G,Q,Y,$,i("span",null,[r('\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u53CD\u5411\u4EE3\u7406\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u8BBF\u95EE\u7684 ZFile \u7AEF\u53E3, \u90A3\u4F60\u9700\u8981\u5728\u53CD\u5411\u4EE3\u7406\u5904\u8BBE\u7F6E\u4EE5\u4E0B\u8BF7\u6C42\u5934\u4E3A\u7528\u6237\u771F\u5B9E IP\uFF1A"X-Forwarded-For", "X-Real-IP", "Proxy-Client-IP", "WL-Proxy-Client-IP", "HTTP_CLIENT_IP", "HTTP_X_FORWARDED_FOR"\uFF0C\u4E0D\u7136\u4E0D\u8BBA\u8C01\u8BBF\u95EE ZFile \u90FD\u53EA\u80FD\u83B7\u53D6\u5230\u53CD\u4EE3\u670D\u52A1\u5668\u7684 IP\uFF0C\u540C\u670D\u52A1\u5668\u4E00\u822C\u662F\u83B7\u53D6\u5230 127.0.0.1 \u6216 localhost, \u8FD9\u6837\u6B64\u529F\u80FD\u5C31\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528!!! (\u8F85\u52A9\u4FE1\u606F: \u7CFB\u7EDF\u83B7\u53D6\u5230\u60A8\u5F53\u524D IP \u4E3A '),i("span",ee,w(e(u)),1),r(")")])]),default:t(()=>[j,a(V,{modelValue:e(l).linkLimitSecond,"onUpdate:modelValue":o[12]||(o[12]=n=>e(l).linkLimitSecond=n),min:0,max:86400,step:1,size:"small",class:"mx-2"},null,8,["modelValue"]),q,a(V,{modelValue:e(l).linkDownloadLimit,"onUpdate:modelValue":o[13]||(o[13]=n=>e(l).linkDownloadLimit=n),min:0,max:9999999,step:1,size:"small",class:"mx-2"},null,8,["modelValue"]),J]),_:1})]),_:1},8,["model"])),[[x,e(h)]]):D("",!0)])}}};export{Le as default};