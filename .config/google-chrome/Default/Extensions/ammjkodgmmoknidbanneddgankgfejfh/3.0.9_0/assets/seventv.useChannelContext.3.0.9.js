var l=Object.defineProperty;var m=(s,t,e)=>t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(m(s,typeof t!="symbol"?t+"":t,e),e);import{u as f}from"./seventv.main.3.0.9.js";import{a as c,L as r,l as h}from"./seventv.useUserAgent.3.0.9.js";import{i as p,p as v,W as N,a4 as C,Q as y}from"./seventv.index.3.0.9.js";const n=Symbol("seventv-channel-context"),{sendMessage:o,target:d}=y();class g{constructor(){i(this,"platform","UNKNOWN");i(this,"id","");i(this,"username","");i(this,"displayName","");i(this,"user");i(this,"loaded",!1);i(this,"active",!1);i(this,"count",0);i(this,"actor",{roles:new Set})}get base(){return{id:this.id,username:this.username,displayName:this.displayName,active:this.active}}setCurrentChannel(t){if(o("STATE",{channel:r(this.base)}),this.id===t.id)return this.username=t.username,this.displayName=t.displayName,this.active=t.active,!1;const e=this.id;return this.id=t.id,this.username=t.username,this.displayName=t.displayName,this.active=t.active,a.set(t.id,this),a.delete(e),this.fetch(),!0}leave(){this.active=!1,o("STATE",{channel:r(this.base)})}fetch(){const t=e=>{this.id===e.detail.id&&(this.loaded=!0,this.user=e.detail.user,h.info("Channel loaded:",this.id),d.removeEventListener("channel_fetched",t))};d.addEventListener("channel_fetched",t)}}const a=new Map;function T(s,t=!1){let e=p(n,null);if(!e){e=(s?a.get(s):null)??c(new g),s&&e.setCurrentChannel({id:s??"",username:"",displayName:"",active:!0});const u=f();e.platform=u.platform,v(n,e),s&&a.set(s,e)}return t&&(N(()=>{e&&e.count++}),C(()=>{!e||!e.count||(e.count--,!(e.count>0)&&e.leave())})),e}export{T as u};