"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9821],{7164:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"network/05/network-05-07","title":"5.7 TCP \u7684\u62e5\u585e\u63a7\u5236","description":"\u5f53\u7f51\u7edc\u4e2d\u6570\u636e\u91cf\u8d85\u8fc7\u4e86\u8bbe\u5907\u7684\u5904\u7406\u80fd\u529b\u65f6\uff0c\u5219\u79f0\u53d1\u751f\u4e86\u7f51\u7edc\u62e5\u585e\u3002\u6b64\u65f6\u4f1a\u5bfc\u81f4\u6570\u636e\u62a5\u7684\u4e22\u5931\u7b49\u60c5\u51b5\uff0c\u4f1a\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u6548\u7387\u964d\u4f4e\uff0c\u7528\u6237\u4f53\u9a8c\u53d8\u5dee\u3002","source":"@site/docs/network/05/network-05-07.md","sourceDirName":"network/05","slug":"/network/05/network-05-07","permalink":"/pgee/network/05/network-05-07","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/network/05/network-05-07.md","tags":[],"version":"current","lastUpdatedAt":1734007929000,"frontMatter":{},"sidebar":"network","previous":{"title":"5.6 TCP \u7684\u6d41\u91cf\u63a7\u5236","permalink":"/pgee/network/05/network-05-06"},"next":{"title":"5.8 TCP \u4f20\u9001\u8fde\u63a5\u7684\u7ba1\u7406","permalink":"/pgee/network/05/network-05-08"}}');var l=n(4848),i=n(8453);const r={},t="5.7 TCP \u7684\u62e5\u585e\u63a7\u5236",c={},h=[{value:"5.7.1 \u6162\u5f00\u59cb\u548c\u62e5\u585e\u907f\u514d",id:"571-\u6162\u5f00\u59cb\u548c\u62e5\u585e\u907f\u514d",level:2},{value:"5.7.2 \u5feb\u91cd\u4f20\u548c\u5feb\u6062\u590d",id:"572-\u5feb\u91cd\u4f20\u548c\u5feb\u6062\u590d",level:2}];function m(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"57-tcp-\u7684\u62e5\u585e\u63a7\u5236",children:"5.7 TCP \u7684\u62e5\u585e\u63a7\u5236"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u7f51\u7edc\u4e2d\u6570\u636e\u91cf\u8d85\u8fc7\u4e86\u8bbe\u5907\u7684\u5904\u7406\u80fd\u529b\u65f6\uff0c\u5219\u79f0\u53d1\u751f\u4e86\u7f51\u7edc\u62e5\u585e\u3002\u6b64\u65f6\u4f1a\u5bfc\u81f4\u6570\u636e\u62a5\u7684\u4e22\u5931\u7b49\u60c5\u51b5\uff0c\u4f1a\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u6548\u7387\u964d\u4f4e\uff0c\u7528\u6237\u4f53\u9a8c\u53d8\u5dee\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u7f51\u7edc\u62e5\u585e\u53ef\u4ee5\u53d1\u751f\u5728\u7f51\u7edc\u7684",(0,l.jsx)(e.strong,{children:"\u4efb\u4f55\u5730\u65b9"}),"\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u8def\u7531\u5668\u3001\u4ea4\u6362\u673a\u3001\u7528\u6237\u7aef\u8bbe\u5907\u7b49\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\uff08P241 5.8.2\uff09\u5f53\u5206\u7ec4\u4e22\u5931\u540e\uff0cTCP \u4f1a\u53d1\u751f\u8d85\u65f6\u91cd\u4f20\uff0c\u6b64\u65f6 TCP \u5373\u8ba4\u4e3a\u53ef\u80fd\u53d1\u751f\u4e86\u7f51\u7edc\u62e5\u585e\u3002\u5373\uff1a",(0,l.jsx)(e.strong,{children:"\u53ea\u8981\u51fa\u73b0\u4e86\u8d85\u65f6\u91cd\u4f20\uff0cTCP \u5c31\u8ba4\u4e3a\u53d1\u751f\u4e86\u7f51\u7edc\u62e5\u585e"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u53d1\u9001\u65b9\u7ef4\u62a4\u4e00\u4e2a",(0,l.jsx)(e.strong,{children:"\u62e5\u585e\u7a97\u53e3 cwnd\uff08Congestion Window\uff09"}),"\uff0c\u771f\u6b63\u7684\u53d1\u9001\u7a97\u53e3\u53d6",(0,l.jsx)(e.strong,{children:"\u5bf9\u65b9\u63a5\u6536\u7a97\u53e3"}),"\u548c",(0,l.jsx)(e.strong,{children:"\u6211\u65b9\u62e5\u585e\u7a97\u53e3"}),"\u4e4b\u95f4\u7684",(0,l.jsx)(e.strong,{children:"\u6700\u5c0f\u503c"}),"\u3002\u6b64\u8282\u4e2d\u5047\u8bbe\u63a5\u6536\u65b9\u63a5\u6536\u7a97\u53e3\u65e0\u9650\u5927\uff0c\u4e14\u6570\u636e\u53d1\u9001\u65f6\u5355\u5411\u7684\uff0c\u5373",(0,l.jsx)(e.strong,{children:"\u6b64\u8282\u4ec5\u8ba8\u8bba\u4e00\u4e2a\u7406\u60f3\u60c5\u51b5\uff1a\u53d1\u9001\u7a97\u53e3\u4ec5\u53d6\u51b3\u4e8e\u62e5\u585e\u7a97\u53e3\u3001\u63a5\u6536\u65b9\u4ec5\u53d1\u9001\u786e\u8ba4\u62a5\u6587\u3002"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u6b64\u8282\u4e3a\u8ba8\u8bba\u65b9\u4fbf\uff0c\u62e5\u585e\u53d1\u9001\u7a97\u53e3\u548c\u53d1\u9001\u7684\u6570\u636e\u5355\u4f4d\u4e3a ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"S"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 \\times SMSS"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"SMSS"})]})]})]}),"\uff0c\u5373 1 \u4e2a\u53d1\u9001\u65b9\u6700\u5927\u62a5\u6587\u6bb5\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["TCP \u8fdb\u884c\u62e5\u585e\u63a7\u5236\u7684\u7b97\u6cd5\u6709\u56db\u79cd\uff1a",(0,l.jsx)(e.strong,{children:"\u6162\u5f00\u59cb\uff08Slow-Start\uff09\u548c\u62e5\u585e\u907f\u514d\uff08Congestion Avoidance\uff09"}),"\u3001",(0,l.jsx)(e.strong,{children:"\u5feb\u91cd\u4f20\uff08Fast Retransmit\uff09\u548c\u5feb\u6062\u590d\uff08Fast Recovery\uff09"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"TCP \u5b9e\u73b0\u5fc5\u987b\u5b9e\u73b0\u6162\u5f00\u59cb\u3001\u62e5\u585e\u907f\u514d\u548c RTO \u6307\u6570\u9000\u907f\u7b97\u6cd5\u4ee5\u5b8c\u6210\u62e5\u585e\u63a7\u5236\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76f8\u5173\u8bcd\u6761\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u521d\u59cb\u62e5\u585e\u7a97\u53e3 IW\uff08Initial Window\uff09"})}),"\n",(0,l.jsx)(e.p,{children:"\u521d\u59cb\u62e5\u585e\u7a97\u53e3\u7531 SMSS \u51b3\u5b9a\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mo,{children:">"}),(0,l.jsx)(e.mn,{children:"2190"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"SMSS > 2190"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"SMSS"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:">"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2190"})]})]})]})," \u65f6\uff0c\u62e5\u585e\u7a97\u53e3\u4e3a ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{mathvariant:"bold",children:"2"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"M"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\bf{2 \\times SMSS}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathbf",children:"2"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathbf",children:"SMSS"})]})})]})})]}),"\uff0c\u4e14",(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8d85\u8fc7 2 \u4e2a\u62a5\u6587\u6bb5"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5f53 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mo,{children:"\u2208"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1095"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"2190"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"SMSS \\in (1095, 2190]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"SMSS"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1095"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2190"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," \u65f6\uff0c\u62e5\u585e\u7a97\u53e3\u4e3a ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{mathvariant:"bold",children:"3"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"M"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\bf{3 \\times SMSS}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathbf",children:"3"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathbf",children:"SMSS"})]})})]})})]}),"\u200b\uff0c\u4e14",(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8d85\u8fc7 3 \u4e2a\u62a5\u6587\u6bb5"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5f53 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mo,{children:"\u2208"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"1950"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"SMSS \\in (0, 1950]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"SMSS"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1950"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," \u65f6\uff0c\u62e5\u585e\u7a97\u53e3\u4e3a ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{mathvariant:"bold",children:"4"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"M"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\bf{4 \\times SMSS}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathbf",children:"4"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathbf",children:"SMSS"})]})})]})})]}),"\uff0c\u4e14",(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8d85\u8fc7 4 \u4e2a\u62a5\u6587\u6bb5"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5e76\u4e14\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53\u63e1\u624b\u8fc7\u7a0b\u4e2d SYN \u548c SYN/ACK \u62a5\u6587\u4e22\u5931\u65f6\uff0c\u62e5\u585e\u7a97\u53e3\u521d\u59cb\u503c",(0,l.jsxs)(e.strong,{children:["\u4e0d\u5f97\u8d85\u8fc7 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{mathvariant:"bold",children:"1"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"M"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"}),(0,l.jsx)(e.mi,{mathvariant:"bold",children:"S"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\bf{1 \\times SMSS}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathbf",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathbf",children:"SMSS"})]})})]})})]})]}),"\uff0c\u4e14",(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8d85\u8fc7 1 \u4e2a\u62a5\u6587\u6bb5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6162\u5f00\u59cb\u95e8\u9650 ssthresh"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u62e5\u585e\u7a97\u53e3\u5927\u5c0f\u8d85\u8fc7 ssthresh \u65f6\uff0c\u5219\u6539\u7528\u62e5\u585e\u907f\u514d\u7b97\u6cd5\u3002ssthresh \u521d\u59cb\u503c",(0,l.jsx)(e.strong,{children:"\u5e94\u5f53"}),"\u8bbe\u7f6e\u4e3a\u4efb\u610f\u9ad8\u7684\u503c\uff08\u4f8b\u5982\u6700\u5927\u53ef\u80fd\u7684\u901a\u544a\u7a97\u53e3\u7684\u5927\u5c0f\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"571-\u6162\u5f00\u59cb\u548c\u62e5\u585e\u907f\u514d",children:"5.7.1 \u6162\u5f00\u59cb\u548c\u62e5\u585e\u907f\u514d"}),"\n",(0,l.jsxs)(e.p,{children:["\uff08",(0,l.jsx)(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc5681#section-3.1",children:"RFC-5681 3.1"}),"\uff09\u6162\u5f00\u59cb\u7684\u4e3b\u8981\u601d\u8def\u662f\uff0c\u4ece\u5c0f\u5230\u5927\u9010\u6e10\u6539\u53d8\u62e5\u585e\u7a97\u53e3\u7684\u6570\u503c\uff0c\u9010\u6e10\u589e\u52a0\u6ce8\u5165\u5230\u7f51\u7edc\u4e2d\u7684\u6570\u636e\u3002\u5177\u4f53\u7684\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53\u62e5\u585e\u7a97\u53e3\u5373 ",(0,l.jsx)(e.strong,{children:"cwnd \u4e0d\u8d85\u8fc7\u6162\u5f00\u59cb\u95e8\u9650 ssthresh"})," \u65f6\uff0c\u4f7f\u7528",(0,l.jsx)(e.strong,{children:"\u6162\u5f00\u59cb"}),"\u7b97\u6cd5\uff0c\u5373",(0,l.jsx)(e.strong,{children:"\u6bcf\u6536\u5230 1 \u4e2a\u62a5\u6587\u6bb5\u7684\u786e\u8ba4\uff0c\u5219\u5c06 cwnd +1"}),"\u3002\u6162\u5f00\u59cb\u5b9e\u9645\u542b\u4e49\u4e3a",(0,l.jsx)(e.strong,{children:"\u4ece\u6162\u901f\u5f00\u59cb"}),"\uff0c\u5b9e\u9645 cwnd \u5927\u5c0f\u7684\u589e\u957f\u4e3a\u6307\u6570\u578b\u7684\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5f53 ",(0,l.jsx)(e.strong,{children:"cwnd \u8d85\u8fc7 ssthresh"})," \u65f6\uff0c\u4f7f\u7528",(0,l.jsx)(e.strong,{children:"\u62e5\u585e\u907f\u514d"}),"\u7b97\u6cd5\uff0c\u5373",(0,l.jsx)(e.strong,{children:"\u6bcf\u53d1\u9001\u4e00\u4e2a\u62e5\u585e\u7a97\u53e3\u7684\u6570\u636e\uff0c\u5e76\u6536\u5230\u4e86\u6240\u6709\u53d1\u9001\u7684\u6570\u636e\u7684\u786e\u8ba4\uff08\u53c8\u79f0\u6bcf\u7ecf\u8fc7\u4e00\u4e2a RTT\uff09\uff0c\u5219\u5c06 cwnd +1"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5f53\u53d1\u751f\u8d85\u65f6\u91cd\u4f20\uff0c\u5373\u53d1\u751f\u7f51\u7edc\u62e5\u585e\u65f6\uff0c",(0,l.jsx)(e.strong,{children:"ssthresh \u51cf\u5c0f\u4e3a\u5f53\u524d cwnd \u7684\u4e00\u534a"}),"\uff0c\u5e76",(0,l.jsx)(e.strong,{children:"\u5c06 cwnd \u91cd\u7f6e\u4e3a\u521d\u59cb\u503c"}),"\uff0c\u91cd\u65b0\u5f00\u59cb\u6267\u884c\u6162\u5f00\u59cb\u7b97\u6cd5\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5e76\u4e14\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"SYN \u548c SYN/ACK \u62a5\u6587\u4e0d\u5f97\u589e\u52a0 cwnd"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"572-\u5feb\u91cd\u4f20\u548c\u5feb\u6062\u590d",children:"5.7.2 \u5feb\u91cd\u4f20\u548c\u5feb\u6062\u590d"}),"\n",(0,l.jsxs)(e.p,{children:["\uff08",(0,l.jsx)(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc5681#section-3.2",children:"RFC-5681 3.2"}),"\uff09\u5feb\u91cd\u4f20\u548c\u5feb\u6062\u590d\u662f",(0,l.jsx)(e.strong,{children:"\u5efa\u7acb\u5728\u6162\u5f00\u59cb\u548c\u62e5\u585e\u907f\u514d\u673a\u5236\u57fa\u7840\u4e4b\u4e0a\uff0c\u9488\u5bf9\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\u8fdb\u884c\u7684\u4f18\u5316"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5feb\u91cd\u4f20\u8981\u6c42\u63a5\u6536\u65b9\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8fdb\u884c\u5ef6\u8fdf\u786e\u8ba4"}),"\uff0c\u5373\u6536\u5230\u4e00\u4e2a\u5206\u7ec4\u5e94",(0,l.jsx)(e.strong,{children:"\u7acb\u5373\u53d1\u9001\u786e\u8ba4"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4e0d\u5f97\u8fdb\u884c\u9009\u62e9\u786e\u8ba4"}),"\uff0c\u5f53\u5206\u7ec4\u4e71\u5e8f\u5230\u8fbe\u65f6\uff0c\u5e94\u5bf9\u5df2\u8fde\u7eed\u6b63\u786e\u6536\u5230\u7684\u5b57\u8282\u9700\u8981",(0,l.jsx)(e.strong,{children:"\u91cd\u590d\u53d1\u9001\u786e\u8ba4"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5feb\u91cd\u4f20"}),"\u6307\u5f53\u63a5\u6536\u65b9\u6536\u5230\u5bf9\u4e09\u4e2a\u91cd\u590d\u5e8f\u53f7\u7684 ACK \u65f6\uff0c\u5219\u89c6\u4e3a\u53d1\u751f\u4e86\u7f51\u7edc\u62e5\u585e\uff0c\u6b64\u65f6",(0,l.jsx)(e.strong,{children:"\u7acb\u5373\u8fdb\u884c\u91cd\u4f20"}),"\uff0c\u800c\u975e\u7b49\u5f85\u8d85\u65f6\u540e\u91cd\u4f20\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5feb\u6062\u590d"}),"\u6307\u5f53\u53d1\u751f\u7f51\u7edc\u62e5\u585e\u65f6\uff0c\u5728\u5c06 ssthresh \u51cf\u5c0f\u4e3a\u5f53\u524d cwnd \u7684\u4e00\u534a\u4e4b\u540e\uff0c",(0,l.jsx)(e.strong,{children:"\u5c06 cwnd \u51cf\u5c0f\u4e3a ssthresh"}),"\uff0c\u800c\u975e\u521d\u59cb\u503c\uff0c\u7136\u540e\u6267\u884c\u6162\u5f00\u59cb\u7b97\u6cd5\u3002"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(m,{...s})}):m(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>t});var a=n(6540);const l={},i=a.createContext(l);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);