"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8003],{5558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"network/04/network-04-08","title":"4.8 \u5b50\u7f51\u53ca\u5176\u63a9\u7801\uff08P127 4.2.2\uff09","description":"\uff08P127 4.2.2 \u811a\u6ce8\uff09\u67d0\u4e2a\u7f51\u7edc\u7684\u4e00\u90e8\u5206\u5c31\u53ef\u4ee5\u79f0\u4e3a\u5b50\u7f51\uff08Subnet \u6216 Subnetwork\uff09\u3002\u4e00\u4e2a\u7f51\u7edc\u5bf9\u4e8e\u6574\u4e2a\u4e92\u8054\u7f51\u6765\u8bf4\uff0c\u5c31\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u5b50\u7f51\u3002","source":"@site/docs/network/04/network-04-08.md","sourceDirName":"network/04","slug":"/network/04/network-04-08","permalink":"/pgee/network/04/network-04-08","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/network/04/network-04-08.md","tags":[],"version":"current","lastUpdatedAt":1734007929000,"frontMatter":{},"sidebar":"network","previous":{"title":"4.7 IP \u6570\u636e\u62a5\u7684\u7ed3\u6784\u53ca\u5176\u6bcf\u4e2a\u57df\u7684\u610f\u4e49\uff08P136 4.2.5\uff09","permalink":"/pgee/network/04/network-04-07"},"next":{"title":"4.9 CIDR\uff08P125 4.2.2\uff09","permalink":"/pgee/network/04/network-04-09"}}');var s=n(4848),o=n(8453);const c={},i="4.8 \u5b50\u7f51\u53ca\u5176\u63a9\u7801\uff08P127 4.2.2\uff09",d={},l=[];function a(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"48-\u5b50\u7f51\u53ca\u5176\u63a9\u7801p127-422",children:"4.8 \u5b50\u7f51\u53ca\u5176\u63a9\u7801\uff08P127 4.2.2\uff09"})}),"\n",(0,s.jsxs)(t.p,{children:["\uff08P127 4.2.2 \u811a\u6ce8\uff09\u67d0\u4e2a\u7f51\u7edc\u7684\u4e00\u90e8\u5206\u5c31\u53ef\u4ee5\u79f0\u4e3a",(0,s.jsx)(t.strong,{children:"\u5b50\u7f51\uff08Subnet \u6216 Subnetwork\uff09"}),"\u3002\u4e00\u4e2a\u7f51\u7edc\u5bf9\u4e8e\u6574\u4e2a\u4e92\u8054\u7f51\u6765\u8bf4\uff0c\u5c31\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u5b50\u7f51\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5730\u5740\u63a9\u7801\uff08\u5e38\u7b80\u79f0\u4e3a",(0,s.jsx)(t.strong,{children:"\u63a9\u7801"}),"\uff09\u7531\u4e00\u8fde\u4e32 1 \u548c\u63a5\u7740\u7684\u4e00\u8fde\u4e32 0 \u7ec4\u6210\uff0c\u800c 1 \u7684\u4e2a\u6570\u5c31\u662f\u7f51\u7edc\u524d\u7f00\u7684\u957f\u5ea6\u3002\u5730\u5740\u63a9\u7801\u53c8\u79f0",(0,s.jsx)(t.strong,{children:"\u5b50\u7f51\u63a9\u7801"}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5224\u65ad\u5bf9\u65b9\u7684 IP \u662f\u5426\u4e0e\u81ea\u5df1\u5728\u540c\u4e00\u4e2a\u7f51\u7edc\u65f6\uff0c\u5c06",(0,s.jsx)(t.strong,{children:"\u5bf9\u65b9\u548c\u81ea\u5df1\u7684\u4e8c\u8fdb\u5236\u7684 IP \u5730\u5740"}),"\u548c",(0,s.jsx)(t.strong,{children:"\u81ea\u5df1\u7684\u5b50\u7f51\u63a9\u7801"}),"\u5206\u522b\u505a",(0,s.jsx)(t.strong,{children:"\u4f4d\u4e0e"}),"\u8fd0\u7b97\uff0c\u82e5\u4e24\u4e2a IP \u5730\u5740\u8fd0\u7b97\u7ed3\u679c\u76f8\u540c\uff0c\u5219\u8bf4\u660e\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7f51\u7edc\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u6ce8\u610f\uff1a\u5f53\u4f7f\u7528\u5206\u7c7b\u7684 IP \u5730\u5740\u65f6\uff0c\u7f51\u7edc\u53f7\u548c\u5b50\u7f51\u53f7\u4e0d\u53ef\u5168\u4e3a 0 \u6216\u5168\u4e3a 1\uff0c\u4f7f\u7528 CIDR \u65f6\u53ef\u4ee5\u3002"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);