import{e as _,l as p,f as c,m as h,F as l,s as u,J as k,an as C,Z as v,u as E,ao as b}from"./seventv.index.3.0.9.js";import{u as y,R as M}from"./seventv.ReactHooks.3.0.9.js";import{d as T}from"./seventv.useModule.3.0.9.js";import{a as g,a5 as B,r as O,m as R}from"./seventv.useUserAgent.3.0.9.js";const L=_({__name:"ChatInputControllerModule",setup(N,{expose:i}){const{markAsReady:m}=T("chat-input-controller",{name:"Controller: Chat Input",depends_on:["chat"]}),s=g(new Map);y({parentSelector:".chat-input",predicate:e=>e.handleGlobalMousedown&&e.props&&e.props.children&&e.props.onClickOut},{hooks:{render(e,n){if(!e.component.container||!e.component.container.parentElement||!e.component.container.parentElement.classList.contains("chat-input"))return n;const r=(n.props??{}).children.find(t=>t.props.className==="chat-input__buttons-container");if(!r)return n;const o=r.props.children.at(-1);if(!o)return n;for(const t of s.values())o.props.children.splice(o.props.children.length-t.offset,0,{[b]:M,key:null,ref:t.parent,type:"seventv-chat-input-button-container",props:{}});return n}}});function d(e,n,a,r,o){const t=O({current:null});return s&&s.set(e,{key:e,offset:r,parent:t.value,component:R(n),props:a,condition:o??(()=>!0)}),t}return i({addButton:d}),m(),(e,n)=>(p(!0),c(l,null,h(s.values(),({parent:a,component:r,props:o,condition:t},f)=>(p(),c(l,{key:f},[a.current&&(typeof t!="function"||t())?(p(),u(v,{key:0,to:a.current},[(p(),u(k(r),B(C(o)),null,16))],8,["to"])):E("",!0)],64))),128))}}),A=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{A as _};