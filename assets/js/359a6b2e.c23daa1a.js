"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7102],{3724:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"programming/01/programming-01-04","title":"1.4 \u7ed3\u6784\u4f53","description":"\u7ed3\u6784\u4f53\u53ef\u4ee5\u7406\u89e3\u4e00\u4e9b\u53d8\u91cf\u7684\u5c01\u88c5\uff0c\u5c06\u4e00\u4e9b\u53d8\u91cf\u5c01\u88c5\u4e3a\u4e00\u4e2a\u6574\u4f53\u3002","source":"@site/docs/programming/01/programming-01-04.md","sourceDirName":"programming/01","slug":"/programming/01/programming-01-04","permalink":"/pgee/programming/01/programming-01-04","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/programming/01/programming-01-04.md","tags":[],"version":"current","lastUpdatedAt":1736487794000,"frontMatter":{},"sidebar":"programming","previous":{"title":"1.3 \u6307\u9488","permalink":"/pgee/programming/01/programming-01-03"},"next":{"title":"1.5 \u94fe\u8868","permalink":"/pgee/programming/01/programming-01-05"}}');var s=e(4848),i=e(8453);const c={},a="1.4 \u7ed3\u6784\u4f53",o={},u=[{value:"1.4.1 \u9762\u5411\u5bf9\u8c61",id:"141-\u9762\u5411\u5bf9\u8c61",level:2}];function d(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"14-\u7ed3\u6784\u4f53",children:"1.4 \u7ed3\u6784\u4f53"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u6784\u4f53\u53ef\u4ee5\u7406\u89e3\u4e00\u4e9b\u53d8\u91cf\u7684\u5c01\u88c5\uff0c\u5c06\u4e00\u4e9b\u53d8\u91cf\u5c01\u88c5\u4e3a\u4e00\u4e2a\u6574\u4f53\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdbool.h>\n\nstruct test_struct {\n    int test_int;\n    bool test_bool;\n};\n\nint main() {\n    struct test_struct stru = {\n            114514,\n            .test_bool = false,\n    };\n    printf("test_int\uff1a%d\\n", stru.test_int);\n    printf("test_bool\uff1a%d\\n", stru.test_bool);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest\ntest_int\uff1a114514\ntest_bool\uff1a0\n\nProcess finished with exit code 0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"141-\u9762\u5411\u5bf9\u8c61",children:"1.4.1 \u9762\u5411\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u51fd\u6570\u6307\u9488\u548c\u7ed3\u6784\u4f53\u7ed3\u5408\uff0c\u53ef\u5b9e\u73b0\u9762\u5411\u5bf9\u8c61\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include "stdio.h"\n\nstruct my_struct {\n    int value;\n    void (*add)(struct my_struct *this, int value);\n};\n\nvoid test_struct_add(struct my_struct *this, int add_value) {\n    this->value += add_value;\n}\n\nstruct my_struct new_test_struct(int init_value) {\n    struct my_struct obj = {\n            .value = init_value,\n            .add = test_struct_add,\n    };\n    return obj;\n}\n\nint main() {\n    struct my_struct struct_a = new_test_struct(114514);\n    printf("struct_a.value\uff1a%d\\n", struct_a.value);\n    struct_a.add(&struct_a, 1805296);\n    printf("struct_a.value\uff1a%d\\n", struct_a.value);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest\nstruct_a.value\uff1a114514\nstruct_a.value\uff1a1919810\n\nProcess finished with exit code 0\n"})})]})}function l(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>c,x:()=>a});var r=e(6540);const s={},i=r.createContext(s);function c(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);