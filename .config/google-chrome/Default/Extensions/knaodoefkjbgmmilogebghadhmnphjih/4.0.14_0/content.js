document.addEventListener("enhancer-watchtime",(function(e){chrome.runtime.sendMessage(e.detail,(function(e){document.dispatchEvent(new CustomEvent("enhancer-watchtime-response",{detail:e}))}))}));
//# sourceMappingURL=content.js.map