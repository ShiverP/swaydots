/*! For license information please see embedding.bundle.js.LICENSE.txt */
(()=>{var e={2682:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i)()(a());r.push([e.id,"#masthead-container.ytd-app,ytd-app[masthead-hidden] #masthead-container.ytd-app{transition:none}#primary,#secondary,#masthead{display:none}\n",""]);const l=r},7824:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i)()(a());r.push([e.id,"#masthead-container.ytd-app,ytd-app[masthead-hidden_] #masthead-container.ytd-app{transition:none}#primary-inner #below.ytd-watch-flexy,#secondary-inner{display:none}#primary-inner #below.ytd-watch-grid,#secondary-inner{display:none}\n",""]);const l=r},3512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i)()(a());r.push([e.id,".metadata-stats.ytd-playlist-byline-renderer{max-height:none;max-height:initial;box-orient:unset;-webkit-box-orient:unset}\n",""]);const l=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(r[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},1296:(e,t,n)=>{var o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=s||u||Function("return this")(),c=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function f(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||r.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var o,a,i,r,l,s,u=0,d=!1,c=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=a;return o=a=void 0,u=t,r=e.apply(i,n)}function b(e){var n=e-s;return void 0===s||n>=t||n<0||c&&e-u>=i}function w(){var e=y();if(b(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-s);return c?m(n,i-(e-u)):n}(e))}function E(e){return l=void 0,h&&o?g(e):(o=a=void 0,r)}function S(){var e=y(),n=b(e);if(o=arguments,a=this,s=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),d?g(e):r}(s);if(c)return l=setTimeout(w,t),g(s)}return void 0===l&&(l=setTimeout(w,t)),r}return t=f(t)||0,v(n)&&(d=!!n.leading,i=(c="maxWait"in n)?p(f(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=s=a=l=void 0},S.flush=function(){return void 0===l?r:E(y())},S}},8984:function(e,t){var n,o;void 0===(o="function"==typeof(n=function(){var e,t,n,o=Array.isArray,a={},i={};return{on:function(r,l){if(l){if(!e){var s=document,u=s.head;s.addEventListener("animationstart",(function(e,t,n,o){if(t=i[e.animationName])for(e.stopImmediatePropagation(),n=t.length,o=0;o<n;o++)t[o](e.target)}),!0),(e=s.getElementById("sentinel-css"))||(e=s.createElement("style"),u.insertBefore(e,u.firstChild)),t=e.sheet,n=t.cssRules}(o(r)?r:[r]).map((function(e,o,r){(o=a[e])||(r="!"==e[0],a[e]=o=r?e.slice(1):"sentinel-"+Math.random().toString(16).slice(2),n[t.insertRule("@keyframes "+o+"{from{transform:none;}to{transform:none;}}",n.length)]._id=e,r||(n[t.insertRule(e+"{animation-duration:0.0001s;animation-name:"+o+";}",n.length)]._id=e),a[e]=o),(i[o]=i[o]||[]).push(l)}))}},off:function(e,r){(o(e)?e:[e]).map((function(e,o,l,s){if(o=a[e]){if(l=i[o],r)for(s=l.length;s--;)l[s]===r&&l.splice(s,1);else l=[];if(!l.length){for(s=n.length;s--;)n[s]._id==e&&t.deleteRule(s);delete a[e],delete i[o]}}}))},reset:function(){a={},i={},e&&e.parentNode.removeChild(e),e=0}}})?n.apply(t,[]):n)||(e.exports=o)},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},r=[],l=0;l<e.length;l++){var s=e[l],u=o.base?s[0]+o.base:s[0],d=i[u]||0,c="".concat(u," ").concat(d);i[u]=d+1;var p=n(c),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=a(m,o);o.byIndex=l,t.splice(l,0,{identifier:c,updater:y,references:1})}r.push(c)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var l=n(i[r]);t[l].references--}for(var s=o(e,a),u=0;u<i.length;u++){var d=n(i[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};function t(e,t){const n=parseFloat(e);return"%"===("string"==typeof e?e.match(/\D+$/)[0]:"s")?n/100*t:n}n.r(e),n.d(e,{getPlaylistDuration:()=>pe});const o={day:0,hour:1,minute:2,second:3},a={day:86400,hour:3600,minute:60,second:1};function i(e,t={}){const n={format:"default",leadingZero:!1,limitUnits:!1,minLength:0,...t};"hms"===n.format&&(n.limitUnits="hour");const i=[];return Object.values(a).forEach(((t,a)=>{if(!(n.limitUnits&&a<o[n.limitUnits]))if(e>=t){const n=parseInt(e/t,10);e-=n*t,i.push(n)}else i.length&&i.push(0)})),!i.length&&i.push(0),i.length<2&&!n.limitUnits&&i.unshift(0),3===n.minLength&&!n.limitUnits&&i.length<3&&i.unshift(0),"hms"===n.format?i.map(((e,t,{length:n})=>`${e}${["h","m","s"].slice(-1*n)[t]}`)).join(""):i.map(((e,t)=>e.toString().length>1||0===t&&!n.leadingZero?e:`0${e}`)).join(":")}new Map;function r(e){var t,n,o,a;return"pip"===e?null===(o=window.documentPictureInPicture)||void 0===o||null===(a=o.window)||void 0===a?void 0:a.document:(null===(t=window.documentPictureInPicture)||void 0===t||null===(n=t.window)||void 0===n?void 0:n.document)||document}function l(){const e=s();return e.length?e:[...(null===(t=document.querySelector("div#description"))||void 0===t?void 0:t.querySelectorAll("a"))||[]].filter((e=>e.href.match(/youtube.com\/watch\?.*(\?|&)t=\d+s/)&&e.textContent.match(/^\d+(:\d+)+$/))).map(((e,t,{length:n})=>{var o;return{index:t,start:parseInt(null===(o=e.href.match(/(\?|&)t=(\d+)s/))||void 0===o?void 0:o[2],10),link:e,isFirst:0===t,isLast:t===n-1}}));var t}function s(){const e=document.querySelector("ytd-watch-flexy #panels"),t=null==e?void 0:e.querySelector('[target-id="engagement-panel-macro-markers-description-chapters"], [target-id="engagement-panel-macro-markers-auto-chapters"]');return t?[...t.querySelectorAll("ytd-macro-markers-list-item-renderer")].map(((e,t,{length:n})=>{return{index:t,title:e.querySelector("h4").textContent,start:(o=e.querySelector("#time").textContent,o.split(":").reverse().slice(0,3).reduce(((e,t,n)=>e+parseInt(t,10)*60**n),0)),link:e.querySelector("a#endpoint"),isActive:e.hasAttribute("active"),isFirst:0===t,isLast:t===n-1};var o})):[]}const u=function({currentTime:e}={}){const t=l(),n=t.find((e=>e.isActive));if(n)return n;let o=t.findIndex((({start:t})=>t>e));return o=-1===o?t.length-1:o-1,t[o]};function d(){return"music.youtube.com"===window.location.hostname}const c=new Map,p={add(){if(r().head.querySelector("#ytp-bezel-text"))return;const e=document.createElement("style");e.id="ytp-bezel-text",e.textContent="\n      .ytp-text-root {\n        display: block !important;\n      }\n      \n      .ytp-text-root .ytp-bezel-text-wrapper {\n        pointer-events: none;\n        z-index: 40 !important;\n      }\n      \n      .ytp-text-root .ytp-bezel-text {\n        display: inline-block !important;\n      }\n      \n      .ytp-text-root .ytp-bezel {\n        display: none !important;\n      }\n    ",r().head.append(e)},remove(){var e;null===(e=r().head.querySelector("#ytp-bezel-text"))||void 0===e||e.remove()}};function m(e,t={}){const n={duration:750,...t};if(d()){var o,a;const e=r().querySelector("#player .ytp-bezel-text");if(!e)return;return null===(o=r().querySelector("#player"))||void 0===o||o.append(null===(a=e.parentElement)||void 0===a?void 0:a.parentElement),l(e)}const i=r().querySelector("#shorts-player .ytp-bezel-text")||r().querySelector("#movie_player .ytp-bezel-text");function l(t){!function({id:e,duration:t,onBefore:n,onAfter:o}){let a=c.get(e);clearTimeout(a),n&&n(),a=setTimeout((()=>{o&&o()}),t),c.set(e,a)}({id:"ytp-bezel-text",duration:n.duration,onBefore:()=>{t.textContent=e,p.add(),t.parentElement.parentElement.classList.add("ytp-text-root")},onAfter:()=>{t.parentElement.parentElement.classList.remove("ytp-text-root"),p.remove()}})}i&&l(i)}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var v=function e(t,n){function o(e,o,a){if("undefined"!=typeof document){"number"==typeof(a=y({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var r in a)a[r]&&(i+="; "+r,!0!==a[r]&&(i+="="+a[r].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+i}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},a=0;a<n.length;a++){var i=n[a].split("="),r=i.slice(1).join("=");try{var l=decodeURIComponent(i[0]);if(o[l]=t.read(r,l),e===l)break}catch(e){}}return e?o[e]:o}},remove:function(e,t){o(e,"",y({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,y({},this.attributes,t))},withConverter:function(t){return e(y({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const f=function(e,t){if(d()){var n;let t=null===(n=v.get("PREF",{domain:".youtube.com"}))||void 0===n?void 0:n.replace(/&volume=\d+/,"");return t=`${t}&volume=${e}`,void v.set("PREF",t,{domain:".youtube.com"})}try{sessionStorage["yt-player-volume"]=JSON.stringify({creation:Date.now(),data:`{"volume":${e},"muted":${t}}`}),localStorage["yt-player-volume"]=JSON.stringify({creation:Date.now(),data:`{"volume":${e},"muted":${t}}`,expiration:Date.now()+2592e6})}catch{}},h=function(e){if(!d())try{sessionStorage["yt-player-playback-rate"]=JSON.stringify({creation:Date.now(),data:`${e}`})}catch{}},g={highres:"4320p (8K)",hd2880:"2880p (5K)",hd2160:"2160p (4K)",hd1440:"1440p (HD)",hd1080:"1080p (HD)",hd720:"720p",large:"480p",medium:"360p",small:"240p",tiny:"144p",auto:"Auto"},b={highres:4320,hd2880:2880,hd2160:2160,hd1440:1440,hd1080:1080,hd720:720,large:480,medium:360,small:240,tiny:144,auto:0};function w({url:e,includeTime:t,options:n}){const o=new URLSearchParams(new URL(e).searchParams);return("https://"+("long"===n.copyVideoURLDomain?`www.youtube.com/watch?v=${o.get("v")}&`:`youtu.be/${o.get("v")}?`)+(!n.copyVideoURLExcludePlaylist&&o.has("list")?`list=${o.get("list")}&`:"")+(t&&o.has("t")?`t=${"hms"===n.copyVideoURLTime?i(Number(o.get("t")),{format:"hms"}):o.get("t")}&`:"")).slice(0,-1)}const E=function(e){return e>=2?100*(e-1)+100:e>=0&&e<=2?e/.02+100:100+e/.04},S=document.createElement("style");S.id="twfyt-hidden-controls-style",S.textContent="\n  #movie_player .ytp-chrome-bottom,\n  #movie_player .ytp-gradient-bottom {\n    display: none !important;\n  }\n";const k={add(){document.head.querySelector(`#${S.id}`)||document.head.append(S)},remove(){S.remove()}};var x=n(3379),T=n.n(x),M=n(7795),C=n.n(M),P=n(569),V=n.n(P),R=n(3565),A=n.n(R),L=n(9216),D=n.n(L),I=n(4589),F=n.n(I),B=n(2682),U={};B.Z&&B.Z.locals&&(U.locals=B.Z.locals);var q,$=0,z={};z.styleTagTransform=F(),z.setAttributes=A(),z.insert=V().bind(null,"head"),z.domAPI=C(),z.insertStyleElement=D(),U.use=function(e){return z.options=e||{},$++||(q=T()(B.Z,z)),U},U.unuse=function(){$>0&&! --$&&(q(),q=null)};const _=U;var j=n(7824),N={};j.Z&&j.Z.locals&&(N.locals=j.Z.locals);var O,Q=0,G={};G.styleTagTransform=F(),G.setAttributes=A(),G.insert=V().bind(null,"head"),G.domAPI=C(),G.insertStyleElement=D(),N.use=function(e){return G.options=e||{},Q++||(O=T()(j.Z,G)),N},N.unuse=function(){Q>0&&! --Q&&(O(),O=null)};const Z=N;let K,W=150;const H=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen,Y=document.exitFullscreen||document.webkitExitFullscreen,J=document.createElement("div");function X(){return H&&Y}function ee(e){e.detail&&"yt-window-resized"===e.detail.actionName&&setTimeout((()=>{_.unuse(),Z.unuse()}),W)}function te(){setTimeout((()=>{window.screen.height>window.innerHeight||ee({detail:{actionName:"yt-window-resized"}})}),100)}function ne(){K=!0,document.removeEventListener("mousedown",ne,!0),document.removeEventListener("keydown",ne,!0)}function oe(e){var t,n,o,a;const{detail:i}=e;!e.target.nodeName.match(/(YTD-GUIDE-ENTRY-RENDERER|YTD-SHORTS)/)&&null!=i&&null!==(t=i.endpoint)&&void 0!==t&&null!==(n=t.commandMetadata)&&void 0!==n&&null!==(o=n.webCommandMetadata)&&void 0!==o&&null!==(a=o.url)&&void 0!==a&&a.includes("/shorts/")&&(e.stopPropagation(),i.endpoint.commandMetadata.webCommandMetadata.url=i.endpoint.commandMetadata.webCommandMetadata.url.replace("/shorts/","/watch?v="),i.endpoint.commandMetadata.webCommandMetadata.webPageType="WEB_PAGE_TYPE_WATCH",delete i.endpoint.reelWatchEndpoint,document.querySelector("ytd-app").dispatchEvent(new CustomEvent("yt-navigate",{detail:i})))}J.style=`\n  position: fixed;\n  inset: 0;\n  background: var(--yt-spec-base-background, #0f0f0f);\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity ${.75*W}ms;\n  z-index: 2147483647;\n`;const ae={videos:"EgZ2aWRlb3PyBgQKAjoA",shorts:"EgZzaG9ydHPyBgUKA5oBAA%3D%3D",streams:"EgdzdHJlYW1z8gYECgJ6AA%3D%3D",playlists:"EglwbGF5bGlzdHPyBgQKAkIA",community:"Egljb21tdW5pdHnyBgQKAkoA",channels:"EghjaGFubmVsc_IGBAoCUgA%3D",about:"EgVhYm91dPIGBAoCEgA%3D"};let ie=!1;function re(e){var t,n;const{detail:o}=e,a=null==o||null===(t=o.endpoint)||void 0===t||null===(n=t.commandMetadata)||void 0===n?void 0:n.webCommandMetadata;if(!a||"WEB_PAGE_TYPE_CHANNEL"!==a.webPageType||a.url.match(/\/(home|featured|videos|shorts|streams|playlists|community|post|store|channels|about|search|live|recent|letsplay|official|releases|podcasts|courses)(\/|\?|$)/)||!o.endpoint.browseEndpoint.canonicalBaseUrl)return;e.stopPropagation();const i=`${o.endpoint.commandMetadata.webCommandMetadata.url}/${ie}`;o.endpoint.commandMetadata.webCommandMetadata.url=i,o.endpoint.browseEndpoint.params=ae[ie],document.querySelector("ytd-app").dispatchEvent(new CustomEvent("yt-navigate",{detail:o})),setTimeout((()=>{const e=`${o.endpoint.commandMetadata.webCommandMetadata.url.replace(/\/(videos|shorts|streams|playlists|community|channels|about)$/,"")}`;o.endpoint.commandMetadata.webCommandMetadata.url=e}),1e3)}n(1296),n(8984);var le=n(3512),se={};le.Z&&le.Z.locals&&(se.locals=le.Z.locals);var ue,de=0,ce={};function pe(e){if("playlistPage"===e){var t,n,o;const e=document.querySelector("ytd-playlist-video-list-renderer");return null==e||null===(t=e.data)||void 0===t||null===(n=t.contents)||void 0===n||null===(o=n.map((({playlistVideoRenderer:e})=>Number(null==e?void 0:e.lengthSeconds))))||void 0===o?void 0:o.reduce(((e,t)=>t?e+t:e),0)}if("watchPage"===e){var a,i,r,l,s,u,d,c,p,m;const e=document.querySelector("ytd-app > #content ytd-playlist-panel-renderer");return{durations:null==e||null===(a=e.data)||void 0===a||null===(i=a.contents)||void 0===i?void 0:i.map((({playlistPanelVideoRenderer:e})=>{var t;return null==e||null===(t=e.lengthText)||void 0===t?void 0:t.simpleText})).filter((e=>e)),unavailable:parseInt(null==e||null===(r=e.data)||void 0===r||null===(l=r.contents)||void 0===l||null===(s=l.slice(-1)[0])||void 0===s||null===(u=s.messageRenderer)||void 0===u||null===(d=u.subtext)||void 0===d||null===(c=d.messageSubtextRenderer)||void 0===c||null===(p=c.text)||void 0===p?void 0:p.simpleText,10)||0,total:null==e||null===(m=e.data)||void 0===m?void 0:m.totalVideos}}}ce.styleTagTransform=F(),ce.setAttributes=A(),ce.insert=V().bind(null,"head"),ce.domAPI=C(),ce.insertStyleElement=D(),se.use=function(e){return ce.options=e||{},de++||(ue=T()(le.Z,ce)),se},se.unuse=function(){de>0&&! --de&&(ue(),ue=null)};const me=".ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-container > button";let ye,ve;const fe=()=>ye.classList.contains("ad-showing"),he=()=>ye.querySelector("video"),ge=e=>{var t;return(null===(t=r("pip"))||void 0===t?void 0:t.querySelector("#shorts-player, #movie_player"))||document.getElementById("shorts-player")||document.getElementById("movie_player")||document.getElementById(e.data.playerId)},be={setInitialChannelPageTab:function(e){ie=e;const t=document.querySelector("ytd-app");if(null==t||t.removeEventListener("yt-navigate",re,!0),ie)return null==t?void 0:t.addEventListener("yt-navigate",re,!0)},setInstantFullscreen:function(e,t){W=t.instantFullscreenDelay,e&&t.instantFullscreenSmooth?X()&&(J.style.transition=`opacity ${.75*W}ms`,document.body.appendChild(J),document.addEventListener("yt-action",ee),document.addEventListener("mousedown",ne,!0),document.addEventListener("keydown",ne,!0),document.documentElement.requestFullscreen=()=>{if(!K)return H.call(document.documentElement);document.body.classList.add("twfyt-hidden-scroll"),J.style.opacity=1,setTimeout((()=>{_.use(),H.call(document.documentElement).then((()=>{setTimeout((()=>{J.style.opacity=0}),W/2)}))}),W)},document.exitFullscreen=()=>{if(!K)return Y.call(document.documentElement);J.style.opacity=1,setTimeout((()=>{Z.use(),Y.call(document).then((()=>{setTimeout((()=>{J.style.opacity=0,document.body.classList.remove("twfyt-hidden-scroll"),te()}),W)}))}),W)}):e?X()&&(document.addEventListener("yt-action",ee),document.addEventListener("mousedown",ne,!0),document.addEventListener("keydown",ne,!0),document.documentElement.requestFullscreen=()=>{K&&_.use(),H.call(document.documentElement)},document.exitFullscreen=()=>{K&&Z.use(),Y.call(document).then((()=>{te()}))}):X()&&(J.remove(),document.removeEventListener("yt-action",ee),document.removeEventListener("mousedown",ne,!0),document.removeEventListener("keydown",ne,!0),document.body.classList.remove("twfyt-hidden-scroll"),_.unuse(),Z.unuse(),document.exitFullscreen=Y,document.documentElement.requestFullscreen=H)},shortsOpenInNormalPlayer:function(e){const t=document.querySelector("ytd-app");if(e)return null==t?void 0:t.addEventListener("yt-navigate",oe,!0);t.removeEventListener("yt-navigate",oe,!0)},setVideoDescriptionFlags(e){window.yt.config_.EXPERIMENT_FLAGS.kevlar_watch_metadata_refresh_relative_date=!e.videoDescriptionExactDate,window.yt.config_.EXPERIMENT_FLAGS.kevlar_watch_metadata_refresh_compact_view_count=!e.videoDescriptionExactViewCount}},we={setPlaylistAutoplayNext(e){ve.canAutoAdvance_=e}},Ee={removeActiveVideo(){delete he().dataset.twfytActiveVideo},hideControls(){if(ye.hideControls)return ye.hideControls();k.add()},showControls(){if(ye.showControls)return ye.showControls();k.remove()},wakeUpControls(){if(ye.wakeUpControls)return ye.wakeUpControls();Ee.dispatchMouseEvent("mouseover"),Ee.dispatchMouseEvent("mousemove")},dispatchMouseEvent(e){const t=new MouseEvent(e);ye.dispatchEvent(t)},enterFullscreen(){ye.isFullscreen()||ye.toggleFullscreen()},getContentLoudness(){var e,t;let n=null===(e=ye.getStatsForNerds())||void 0===e||null===(t=e.volume)||void 0===t?void 0:t.match(/-?\d+\.?\d+?dB/);n=n&&parseFloat(n[0])||0,window.postMessage({type:"twfyt-get-content-loudness",payload:n},window.location.origin)},getPlaybackQuality(){window.postMessage({type:"twfyt-get-playback-quality",payload:ye.getPlaybackQuality()},window.location.origin)},getPlayerData(e){var t,n;window.postMessage({type:"twfyt-get-player-data",payload:null===(t=(n=ye)[e])||void 0===t?void 0:t.call(n)},window.location.origin)},getVolume(){window.postMessage({type:"twfyt-get-volume",payload:{volume:Ee.getVolumeValue(),muted:ye.isMuted()}},window.location.origin)},getVideoDownloadLink(e,{videoDownloadLinkMode:t,videoDownloadLinkQuery:n}){var o,a;const i=null===(o=ye)||void 0===o||null===(a=o.getVideoData())||void 0===a?void 0:a.video_id,r=n.replace(/%s/,i);switch(t){case"copy":return navigator.clipboard.writeText(r).then((()=>m("Get video download link",{duration:1500})),(()=>m("Need permission to write to the clipboard",{duration:3e3})));case"open":return window.open(r)}},getVideoURL(e,t){const n=ye.getVideoUrl&&ye.getVideoUrl();n&&navigator.clipboard.writeText(w({url:n,includeTime:!1,options:t})).then((()=>m("Copy video URL",{duration:1500})),(()=>m("Need permission to write to the clipboard",{duration:3e3})))},getVideoURLAtCurrentTime(e,t){const n=ye.getVideoUrl&&ye.getVideoUrl();n&&navigator.clipboard.writeText(w({url:n,includeTime:!0,options:t})).then((()=>m("Copy video URL at current time",{duration:1500})),(()=>m("Need permission to write to the clipboard",{duration:3e3})))},handleGlobalKeyDown(e){const{keyCode:t,shift:n}="object"==typeof e?e:JSON.parse(e);ye.handleGlobalKeyDown(t,n)},addPlayerStateChangeListener(){ye.addEventListener("onStateChange",(e=>{1===e&&window.postMessage({type:"ytpActionResponse",action:"playerStateChangedToPlaying",payload:e},window.location.origin)}))},reverseEmbed(){var e;if(window.location!==window.parent.location)return null===(e=document.querySelector(".ytp-title-link"))||void 0===e?void 0:e.click();const t=ye.getVideoUrl();t&&(window.location=t)},setLoopVideo(e){ye.setLoopVideo(e)},toggleLoopVideo(){ye.setLoopVideo(!ye.getLoopVideo())},setMinimized(e){ye.setMinimized(e)},toggleFullscreen(){var e,t,n;return d()?document.fullscreenElement?null===(t=document.querySelector("ytmusic-player-bar .exit-fullscreen-button"))||void 0===t?void 0:t.click():null===(e=document.querySelector(".song-media-controls.ytmusic-player .fullscreen-button"))||void 0===e?void 0:e.click():ye.toggleFullscreen?ye.toggleFullscreen():(n=ye,void(null===document.fullscreenElement?(n||document.documentElement).requestFullscreen():document.exitFullscreen&&document.exitFullscreen()))},toggleVideoInfo(){ye.isVideoInfoVisible&&ye.showVideoInfo&&ye.hideVideoInfo&&(ye.isVideoInfoVisible()?ye.hideVideoInfo():ye.showVideoInfo())},updateVideoDataWhenPlaying(){const e=ye.getPlayerState();1!==e&&3!==e||ye.updateVideoData()},getVideoEmbedCode(e){var t;if(!ye.getVideoEmbedCode)return;const n=ye.getVideoEmbedCode(),o=null===(t=n.match(/src="(.*?)"/))||void 0===t?void 0:t[1],a=new URL(o);e&&(e.startAtCurrentTime&&a.searchParams.append("start",Math.floor(he().currentTime)),e.excludePlaylist&&a.searchParams.delete("list"),e.privacyEnhancedMode&&(a.host="www.youtube-nocookie.com")),navigator.clipboard.writeText(n.replace(o,a.href)).then((()=>m("Copy embed code",{duration:1500})),(()=>m("Need permission to write to the clipboard",{duration:3e3})))},updateLastActiveTime(){var e;null===(e=ye)||void 0===e||e.updateLastActiveTime()},adjustPlaybackQuality(e){if(e>0)return Ee.increasePlaybackQuality();e<0&&Ee.decreasePlaybackQuality()},setPlaybackQuality(e,t){const n="object"==typeof e?e.value:e;if(!n||!ye.setPlaybackQualityRange||!ye.getAvailableQualityLevels)return;const o=ye.getAvailableQualityLevels(),a="downgrade"===t.ytpPreferredQualityUpgradeOrDowngrade?o.filter((e=>b[e]<=b[n]))[0]||o[0]:o.filter((e=>b[e]>=b[n])).slice(-1)[0]||o[0];ye.setPlaybackQualityRange(a),!e.noEcho&&m(g[a])},decreasePlaybackQuality(){const e=ye.getAvailableQualityLevels(),t=e.findIndex((e=>e===ye.getPlaybackQuality())),n=e[Math.min(t+1,e.length)];if("auto"===n)return m("144p");ye.setPlaybackQualityRange(n),m(g[n])},increasePlaybackQuality(){const e=ye.getAvailableQualityLevels(),t=e.findIndex((e=>e===ye.getPlaybackQuality())),n=e[Math.max(0,t-1)];ye.setPlaybackQualityRange(n),m(g[n])},adjustSubtitlesFontSize(e){if(e>0)return Ee.increaseSubtitlesFontSize(e);e<0&&Ee.decreaseSubtitlesFontSize(e)},increaseSubtitlesFontSize(e){const t=ye.getSubtitlesUserSettings();if(!t)return;const n=t.fontSizeIncrement;let o=Math.min(Math.round(100*(n+e))/100,4);n<0&&o>0&&(o=0),ye.updateSubtitlesUserSettings({...t,fontSizeIncrement:o}),m(`Subtitles - Font Size: ${E(o)}%`)},decreaseSubtitlesFontSize(e){const t=ye.getSubtitlesUserSettings();if(!t)return;const n=t.fontSizeIncrement;let o=Math.max(Math.round(100*(n+e))/100,-2);n>0&&o<0&&(o=0),ye.updateSubtitlesUserSettings({...t,fontSizeIncrement:o}),m(`Subtitles - Font Size: ${E(o)}%`)},adjustPlaybackRateBy(e,t){const{playbackRate:n}=he();let o=Math.min(Math.max(t.playbackRateRangeMin,n+e),t.playbackRateRangeMax);(e>0&&n<1&&o>1||e<0&&n>1&&o<1)&&(o=1),Ee.setPlaybackRate(o,t)},setPlaybackRate(e,t){let n="object"==typeof e?e.value:e;n=Number(n);const o=e=>{m(Math.round(100*e)/100+"x",{duration:t.ytpBezelTextDurationShort})};return n>=2?(ye.setPlaybackRate(2),n=Math.round(100*Math.min(n,16))/100,he().playbackRate=n,h(ye.getPlaybackRate()),!e.noEcho&&o(n)):n<=.25?(ye.setPlaybackRate(.25),n=Math.round(100*Math.max(n,0))/100,he().playbackRate=n,h(ye.getPlaybackRate()),!e.noEcho&&o(n)):n%.05?(ye.setPlaybackRate(n),he().playbackRate=n,h(ye.getPlaybackRate()),!e.noEcho&&o(n)):(ye.setPlaybackRate(n),he().playbackRate=n,!e.noEcho&&o(ye.getPlaybackRate()),void h(ye.getPlaybackRate()))},getVolumeValue:()=>Math.round(ye.getVolume()),adjustVolumeBy(e,t){let n=Ee.getVolumeValue()+e;t&&(n=Math.min(t.volumeRangeMax,Math.max(t.volumeRangeMin,n))),Ee.setVolume(n,t)},setVolume(e,t){(null==t?void 0:t.volumeUnmuteOnChange)&&ye.unMute();const n="object"==typeof e?e.value:e;if(d()){const e=document.querySelector("#volume-slider");e&&(e.value=n)}ye.setVolume(n),!e.noEcho&&m(`${Ee.getVolumeValue()}%${ye.isMuted()?" (Muted)":""}`,{duration:t.ytpBezelTextDurationShort}),f(Ee.getVolumeValue(),ye.isMuted())},toggleMute(e,t){ye.isMuted()?ye.unMute():ye.mute(),m(`${Ee.getVolumeValue()}%${ye.isMuted()?"\n(Muted)":""}`,{duration:t.ytpBezelTextDurationShort}),f(Ee.getVolumeValue(),ye.isMuted())},setMute(e){("object"==typeof e?e.value:e)?ye.mute():ye.unMute(),f(Ee.getVolumeValue(),ye.isMuted())},seekBy(e,n){var o;if("string"==typeof e&&e.match(/f$/))return Ee.seekByFrame(parseInt(e,10));if("string"==typeof e&&e.match(/c$/))return Ee.seekByChapter(parseInt(e,10),n);const a=he(),i=t(e,a.duration);!ye.seekBy||null!==(o=ye.classList)&&void 0!==o&&o.contains("ad-showing")?a.currentTime+=i:ye.seekBy(i),Se({ytp:ye,options:n,step:i})},seekByFrame(e){if(he().pause(),e>0)for(;e>0;)!d()&&ye.handleGlobalKeyDown?ye.handleGlobalKeyDown(190):Ee.seekBy(.04),e-=1;else for(;e<0;)!d()&&ye.handleGlobalKeyDown?ye.handleGlobalKeyDown(188):Ee.seekBy(-.04),e+=1},seekByChapter(e,t){const n=u({currentTime:ye.getCurrentTime()});return e>0?(ye.handleGlobalKeyDown(39,!0,!0,!0,!0),Se({ytp:ye,options:t})):n?t.replayOnPreviousChapter&&ye.getCurrentTime()-n.start>5?(ye.seekTo(n.start),Se({ytp:ye,options:t})):0===n.index&&n.start>0?ye.seekTo(0):(ye.handleGlobalKeyDown(37,!0,!0,!0,!0),void Se({ytp:ye,options:t})):(ye.handleGlobalKeyDown(37,!0,!0,!0,!0),Se({ytp:ye,options:t}))},seekTo(e,n){const o=he();if("100%"===e)return o.currentTime=o.duration,setTimeout((()=>{var e;null===(e=document.querySelector(me))||void 0===e||e.click()}),50);const a=t(e,o.duration);o.currentTime=a,Se({ytp:ye,options:n})},seekToChapter(e){ye.seekToChapterWithAnimation(e)},nextChapterOrVideo(e,t){const n=u({currentTime:he().currentTime});if(!n||n.isLast)return ye.nextVideo();Ee.seekByChapter(1,t)},previousChapterOrVideo(e,t){const n=u({currentTime:he().currentTime});if(!n||n.isFirst){const e=he();return e.currentTime>5?e.currentTime=0:Ee.previousVideo()}Ee.seekByChapter(-1,t)},previousOrReplayVideo(){const e=he();if(e.currentTime>5)return e.currentTime=0;Ee.previousVideo()},previousVideo(){const e=ge();if(null!=e&&e.querySelector('.ytp-prev-button[aria-disabled="true"]'))return window.navigation.back();ye.previousVideo()},togglePlay(){const e=he();e.paused?e.play():e.pause()},pauseVideo(){he().pause()},playVideo(){he().play()},skipAd(){const e=he();if(null==e||!e.closest("#movie_player.ad-showing"))return m("Skip Ad (None)");e.currentTime=e.duration,setTimeout((()=>{var e;null===(e=document.querySelector(me))||void 0===e||e.click()}),50)}};function Se({ytp:e,options:t,step:n}){var o;if(null!==(o=e.getVideoData())&&void 0!==o&&o.isLive)return t.actionIndicatorActionSeek&&n&&m(`${n<0?"-":"+"}${Math.abs(n)<43200?i(Math.abs(n)):""}`,{duration:t.ytpBezelTextDurationActionSeek});setTimeout((()=>{const n=t.actionIndicatorActionSeekBasedOnPlaybackRate&&!fe()&&e.getPlaybackRate()||1,o=he();switch(t.actionIndicatorActionSeek){case!0:return m(`${i(o.currentTime/n)}`,{duration:t.ytpBezelTextDurationActionSeek});case"currentTime+duration":return m(`${i(o.currentTime/n)} / ${i(o.duration/n)}`,{duration:t.ytpBezelTextDurationActionSeek});case"remainingTime":return m(`-${i((o.duration-o.currentTime)/n)}`,{duration:t.ytpBezelTextDurationActionSeek})}}),1)}window.addEventListener("message",(t=>{if(t.source===window){if("twfytMainWorldDataRequest"===t.data.type)return function({action:t,payload:n,selector:o,options:a}){var i;const r=e[t];!function({type:e,action:t,payload:n},o){window.postMessage({type:e,action:t,payload:n,options:o},window.location.origin)}({type:"twfytMainWorldDataResponse",payload:r?r(n,a):null===(i=document.querySelector(o))||void 0===i?void 0:i[n]})}(t.data);if("twfytAction"!==t.data.type)if("twfytYtPlaylistManager"!==t.data.type){if("ytpActionRequest"===t.data.type){if(ye=ge(t),!ye)return console.log("YouTube player element not found.");const e=Ee[t.data.action]||ye[t.data.action];e&&e(t.data.payload,t.data.options,t.data.detail)}}else{if(ve=document.querySelector("yt-playlist-manager"),!ve)return;const e=we[t.data.action];e&&e(t.data.payload,t.data.options)}else{const e=be[t.data.action];e&&e(t.data.payload,t.data.options)}}}))})()})();