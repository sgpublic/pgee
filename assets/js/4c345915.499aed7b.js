"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9129],{1225:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"network/08/network-08-05","title":"8.5 CSMA/CA \u534f\u8bae\u7684\u539f\u7406","description":"\u8f7d\u6ce2\u76d1\u542c\u591a\u70b9\u63a5\u5165/\u78b0\u649e\u907f\u514d CSMA/CA\uff08Carrier Sense Multiple Access with Collision Avoidance\uff09 \u662f Wi-Fi \u5728 MAC \u5c42\u7684\u534f\u8bae\u3002\u534f\u8bae\u7684\u8bbe\u8ba1\u662f\u8981\u5c3d\u91cf\u51cf\u5c11\u78b0\u649e\u53d1\u751f\u7684\u6982\u7387\u3002","source":"@site/docs/network/08/network-08-05.md","sourceDirName":"network/08","slug":"/network/08/network-08-05","permalink":"/pgee/network/08/network-08-05","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/network/08/network-08-05.md","tags":[],"version":"current","lastUpdatedAt":1734007929000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"network","previous":{"title":"8.4 \u65e0\u7ebf\u5c40\u57df\u7f51\u7684 DCF \u548c PCF","permalink":"/pgee/network/08/network-08-04"},"next":{"title":"\u4e5d\u3001\u4e0b\u4e00\u4ee3\u4ee5\u592a\u7f51","permalink":"/pgee/category/\u4e5d\u4e0b\u4e00\u4ee3\u4ee5\u592a\u7f51"}}');var r=s(4848),i=s(8453);const a={sidebar_position:5},c="8.5 CSMA/CA \u534f\u8bae\u7684\u539f\u7406",l={},o=[];function d(n){const e={annotation:"annotation",h1:"h1",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"85-csmaca-\u534f\u8bae\u7684\u539f\u7406",children:"8.5 CSMA/CA \u534f\u8bae\u7684\u539f\u7406"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8f7d\u6ce2\u76d1\u542c\u591a\u70b9\u63a5\u5165/\u78b0\u649e\u907f\u514d CSMA/CA\uff08Carrier Sense Multiple Access with Collision Avoidance\uff09"})," \u662f Wi-Fi \u5728 MAC \u5c42\u7684\u534f\u8bae\u3002\u534f\u8bae\u7684\u8bbe\u8ba1\u662f\u8981\u5c3d\u91cf\u51cf\u5c11\u78b0\u649e\u53d1\u751f\u7684\u6982\u7387\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"CSMA/CA \u4e0e CSMA/CD \u539f\u7406\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u7565\u6709\u4e0d\u540c\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53d1\u9001\u6570\u636e\u524d\u9700\u76d1\u542c\u4fe1\u9053\uff0c\u82e5\u8fde\u7eed\u4e00\u6bb5\u65f6\u95f4\uff08\u5373\u65f6\u95f4\u95f4\u9694 DIFS\uff09\u5185\u4fe1\u9053\u7a7a\u95f2\uff0c\u5219\u76f4\u63a5\u53d1\u9001\u6574\u4e2a\u6570\u636e\u5e27\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u82e5\u4fe1\u9053\u4e0d\u7a7a\u95f2\uff0c\u5219\u8fdb\u5165",(0,r.jsx)(e.strong,{children:"\u4e89\u7528\u671f"}),"\uff0c\u5373\u968f\u673a\u751f\u6210\u4e00\u4e2a\u9000\u907f\u65f6\u9699\u6570\uff08\u751f\u6210\u65b9\u6cd5\u540c CSMA/CD \u4e2d\u7684",(0,r.jsx)(e.strong,{children:"\u622a\u65ad\u4e8c\u8fdb\u5236\u6307\u6570\u9000\u907f\u7b97\u6cd5"}),"\uff09\uff0c\u5e76\u542f\u52a8",(0,r.jsx)(e.strong,{children:"\u9000\u907f\u8ba1\u65f6\u5668\uff08Backoff Timer\uff09"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e2a\u7ad9\u9700\u8981\u5728\u6bcf\u4e2a\u65f6\u9699\u5f00\u59cb\u65f6\u68c0\u6d4b\u4fe1\u9053\u662f\u5426\u7a7a\u95f2\uff0c\u82e5\u4fe1\u9053\u4e0d\u7a7a\u95f2\uff0c\u5219\u51bb\u7ed3\u9000\u907f\u8ba1\u65f6\u5668\uff0c\u63a8\u8fdf\u5230\u4e0b\u4e00\u6b21\u4e89\u7528\u4fe1\u9053\u65f6\u7ee7\u7eed\u8ba1\u65f6\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["802.11g \u89c4\u5b9a\u6bcf\u4e2a\u65f6\u9699\u65f6\u95f4\u4e3a ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mn,{children:"9"}),(0,r.jsx)(e.mi,{children:"\u03bc"}),(0,r.jsx)(e.mi,{children:"s"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"9\\mu s"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord",children:"9"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"\u03bc"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53d1\u9001\u5b8c\u6570\u636e\u540e\u5fc5\u987b\u8fdb\u5165\u4e89\u7528\u671f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4f7f\u5f97\u6240\u6709\u7ad9\u80fd\u516c\u5e73\u7684\u4e89\u7528\u4fe1\u9053\uff0c\u4f46\u4ecd\u53ef\u80fd\u53d1\u751f\u78b0\u649e\u3002\u82e5\u53d1\u9001\u6570\u636e\u65f6\u53d1\u751f\u4e86\u78b0\u649e\uff0c\u5219\u78b0\u649e\u7684\u7ad9\u5fc5\u987b\u91cd\u4f20\uff0c\u5373\u91cd\u65b0\u8fdb\u5165\u4e89\u7528\u671f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u76f8\u5173\u8bcd\u6761\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u9690\u853d\u7ad9\u95ee\u9898\uff08Hidden Station Problem\uff09"})}),"\n",(0,r.jsxs)(e.p,{children:["CSMA/CD \u7684\u7f51\u7edc\u4f7f\u7528\u540c\u4e00\u901a\u4fe1\u4ecb\u8d28\uff0c\u56e0\u6b64\u78b0\u649e\u4e00\u5b9a\u80fd\u88ab\u6240\u6709\u7ad9\u53d1\u73b0\uff0c\u4f46 Wi-Fi \u4f7f\u7528\u65e0\u7ebf\u4fe1\u9053\uff0c\u5b58\u5728\u4fe1\u53f7\u8986\u76d6\u8303\u56f4\u7684\u95ee\u9898\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u67d0\u7ad9\u53ef\u80fd\u65e0\u6cd5\u68c0\u6d4b\u5230\u5168\u90e8\u5176\u4ed6\u7ad9\u662f\u5426\u5728\u5360\u7528\u4fe1\u9053\uff0c\u5373",(0,r.jsx)(e.strong,{children:"\u9690\u853d\u7ad9\u95ee\u9898"}),"\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function a(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);