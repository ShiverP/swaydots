/*! For license information please see custom-css-and-js.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={2408:(e,t)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var o={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a=Object.assign,n={};function r(e,t,a){this.props=e,this.context=t,this.refs=n,this.updater=a||o}function i(){}function l(e,t,a){this.props=e,this.context=t,this.refs=n,this.updater=a||o}r.prototype.isReactComponent={},r.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=r.prototype;var c=l.prototype=new i;c.constructor=l,a(c,r.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},7294:(e,t,o)=>{o(2408)}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,o),r.exports}(()=>{const e={actionIndicatorActionSeek:!1,actionIndicatorActionSeekBasedOnPlaybackRate:!1,actionIndicatorIconHidden:!1,actionIndicatorTextHidden:!1,actionIndicatorTextPosition:!1,actionIndicatorTextOffsetX:"",actionIndicatorTextOffsetY:"",autoclickAdSkipButton:!1,adsAutoSkip:!1,adsAutoSkipDelay:5,adsBlackout:!1,adsSetVolumeMuted:!1,audioAutoGain:!1,audioAutoGainBoostThreshold:-3,audioAutoGainMode:"boost",audioBoostGain:0,audioBoostGainEnabled:!1,audioCompressor:!1,audioCompressorKnee:20,audioCompressorRatio:12,audioCompressorThreshold:-50,audioHPF:!1,audioHPFFrequency:200,audioMonoMix:!1,audioMonoMixSource:"left+right",audioPan:0,backToTop:!1,backToTopPosition:"center",channelPageBanner:!1,channelTrailerAutoplay:!0,channelTrailerHidden:!1,channelFullTagline:!1,chaptersAutoShowList:!1,chatVisibility:!1,cinemaMode:!1,cinemaModeHiddenMasthead:!0,cinemaModeHiddenScrollbar:!0,cleanPlayer:!1,cleanPlayerAdOverlay:!1,cleanPlayerCE:!1,cleanPlayerChannelWattermark:!1,cleanPlayerCinematics:!1,cleanPlayerEmbeddedPauseOverlay:!1,cleanPlayerEndScreen:!1,cleanPlayerPaidContentOverlay:!1,cleanPlayerProgressBarHeatmap:!1,cleanPlayerSuggestedAction:!1,cleanPlayerTop:!1,cleanPlayerVideoAnnotations:!1,cleanPlayerScrollForDetails:!1,cleanPlayerLoadingSpinner:!1,cleanPlayerLargePlayButton:!1,cleanSite:!1,cleanSiteAds:!1,cleanSiteAnnoyances:!1,cleanSiteNotificationToast:!1,cleanSiteDrawerFooter:!1,cleanSiteHeaderVoiceSearchButton:!1,cleanSiteHeaderLogoYoodle:!1,cleanSiteHomeHeaderChips:!1,cleanSiteSidebarDonationShelf:!1,cleanSiteWatchClarifyBox:!1,cleanSiteWatchCommentInput:!1,cleanSiteWatchInfoMenu:!1,cleanSiteWatchSubscribe:!1,cleanSiteWatchDescription:!1,cleanSiteThumbnailHoverOverlays:!1,cleanSiteWatchLaterAndQueueLabels:!1,cleanSiteWatchRelatedVideosChips:!1,cleanSiteWatchChaptersSyncToVideoTime:!1,cleanSiteWatchTitleHashtag:!1,commentsInputFocusAndPaste:!1,commentsInputTimeCorrection:0,commentsInSidebar:!1,commentsInSidebarPermanent:!1,commentsInSidebarDisableMainComments:!1,contentFilters:!1,cleanSiteHomeSections:!1,contentFiltersShortsHomePage:!1,contentFiltersShortsSubscriptionsPage:!1,contentFiltersShortsRelatedVideos:!1,contentFiltersShortsSearch:!1,contentFiltersUpcomingHomePage:!1,contentFiltersUpcomingSubscriptionsPage:!1,contentFiltersLiveHomePage:!1,contentFiltersLiveSubscriptionsPage:!1,contentFiltersLiveRelatedVideos:!1,contentFiltersMixHomePage:!1,contentFiltersMixRelatedVideos:!1,contentFiltersFeaturedSectionsSearch:!1,contentFiltersWatchedVideosHomePage:!1,contentFiltersWatchedVideosSubscriptionsPage:!1,contentFiltersWatchedVideosChannelPage:!1,contentFiltersWatchedVideosSearchPage:!1,contentFiltersWatchedVideosRelatedVideos:!1,contextMenusSearch:!1,copyVideoURLDomain:"short",copyVideoURLExcludePlaylist:!1,copyVideoURLTime:"s",customCSS:!0,customCSSCode:"",customJS:!0,customJSCode:"",commentsSectionHidden:!1,commentsSortBy:!1,convertChannelNameToURL:!1,cvfFilename:"",cvfIncludeSubtitles:!1,cvfQuality:.92,cvfType:"JPEG",downloadButton:!1,downloadButtonBackgroundMode:"site",downloadButtonKey1Url:"",downloadButtonKey2Url:"",downloadButtonKey3Url:"",embedModeWindow:"current",extensionShortcutsSeekByValue:5,extensionShortcutsAdjustPlaybackRateByValue:.25,extensionShortcutsAdjustVolumeByValue:5,extensionOptionsPageLayout:"vertical",fullVideoTitle:!1,fullVideoTitleChannelsPages:!0,fullVideoTitleOtherPages:!0,fullVideoTitleWatchPage:!0,gotoChapterStart:"mousedown1",initialAutoPlay:!1,initialChannelPageTab:!1,initialFullscreen:!1,initialPlaybackRate:!1,initialPlaybackRatePerGenre:!1,initialPlaybackRateLevel:1,initialTheatreMode:!1,initialTheme:!1,initialSubtitles:!1,initialVolume:!1,initialVolumeLevel:50,initialMute:!1,initialMuteValue:!1,inlinePlayback:!1,inlinePlaybackRoundCorners:!1,instantFullscreen:!1,instantFullscreenDelay:150,instantFullscreenSmooth:!1,instantTogglePlay:!1,initialLoop:!1,maxMouseControlArea:!1,mmbToggleFullscreen:!1,mouseControlActive:!1,mouseControlDisableDoubleClick:!1,mouseControlElement:"player",mouseControlInactiveWheelWhilePaused:!1,mouseControlModKey:"shift",mouseControlMiniplayer:!1,mouseControlShorts:!0,pausePreviousActiveVideo:!1,playbackRateRangeMin:.1,playbackRateRangeMax:16,playlistAutoplayNext:!0,playlistDuration:!1,playerViewChangeDelayInBackground:0,playerBackgroundColor:!1,playerInitialStateBackground:!1,playerInitialStateForeground:!1,playerVolumeBarAlwaysVisible:!1,preventAutoPause:!1,removeCustomMainScrollbar:!1,replayOnPreviousChapter:!1,richGridView:!1,richGridViewItemsPerRow:6,richGridViewDecreasedContainerWidth:!0,richGridViewDecreasedFontSize:!0,richGridViewHiddenAvatars:!0,scrollbarThin:!1,searchBoxStyles:!1,searchPlaylistPage:!1,searchResultsOpenInNewTab:!1,searchResultsNavigation:!1,shortsAutoplayNext:!1,shortsConvertTitleToUrl:!1,shortsLoop:!1,shortsOpenInNormalPlayer:!1,shortsPlayerOverlay:!1,sidebarOverlaid:!1,sidebarOverlaidWidth:"",sidebarOverlaidScrollbarWidth:11,sidebarOverlaidSingleScrollbar:!1,sidebarPanelsMaxHeight:!1,sidebarRelatedHidden:!1,sidebarSectionFixed:!1,sidebarSectionHidden:!1,skipVideoBlockGlobal:!1,skipVideoBlockGlobalData:{enabled:!0,start:""},skipVideoBlockIndividual:!1,skipVideoBlockIndividualData:[],stickyPlayer:!1,stickyPlayerHeight:270,stickyPlayerInactiveWhilePaused:!1,stickyPlayerInactiveAtEnd:!1,stickyPlayerOffsetX:0,stickyPlayerOffsetY:0,stickyPlayerActivateOnlyOnDemand:!1,stickyPlayerPosition:"default",stickyPlayerThreshold:.5,stickyPlayerType:"wide",subtitlesDisabled:!1,subtitlesDisabledWhenPaused:!1,subtitlesPosition:!1,subtitlesPositioningEnabled:!0,subtitlesOffsetY:2,themeType:"system",thumbnailControlPrimary:!1,thumbnailViewFullSize:!1,thumbnailViewFullSizeByMouse:"ctrl+mousedown0",transcriptAutoShow:!1,transparentButtonsAndDescription:!1,upNextVideo:!1,videoDescription:!1,videoDescriptionInSidebar:!1,videoDescriptionExactDate:!1,videoDescriptionExactViewCount:!1,videoDimmer:!1,videoDimmerBrightness:1,videoDimmerContrast:100,videoDownloadLinkMode:"copy",videoDownloadLinkQuery:"yt-dlp https://youtu.be/%s",videoPlaybackInfo:!1,videoPlaybackInfoBasedOnPlaybackRate:!1,videoPlaybackInfoStyleFontSize:1,videoPlaybackInfoStyleOpacity:1,videoPlaybackInfoStylePosition:"top-left",videoPlaybackInfoCurrentChapter:!1,videoPlaybackInfoPlaybackRate:!1,videoPlaybackInfoCurrentTime:!0,videoPlaybackInfoRemainingTime:!1,videoPlaybackInfoVolume:!1,videoPlaybackInfoResolution:!1,volumeRangeMin:0,volumeRangeMax:100,volumeUnmuteOnChange:!1,watchedVideosDim:!1,watchedVideosDimImage:!0,watchedVideosDimThumbnail:!1,watchedVideosDimItem:!1,watchedVideosDimOpacity:50,watchedVideosDimGrayscale:100,watchedVideosDimStartThreshold:0,ytElementAuxActions:!1,ytElementAuxActionsDelay:100,ytpAutohideDelay:3e3,ytpBezelTextDurationShort:750,ytpBezelTextDurationActionSeek:750,ytpBezelTextPosition:!1,ytpBezelTextPositionOffset:10,ytpControlsHidden:!1,ytpControlsHiddenPlaying:!0,ytpControlsHiddenPaused:!0,ytpControlsHiddenShowOnHover:!1,ytpControlsMode:"default",ytpControlsModeAvailableForCycle:["default","mini","combined","persistent-mini","persistent-default"],ytpControlsMiniRefreshRate:1e3,ytpGradientBottom:!1,ytpPreferredQuality:!1,ytpPreferredQualityUpgradeOrDowngrade:"upgrade",ytpPreferredQualityRevert:!1,ytpPreferredQualityBackground:!1,ytpPreferredQualityEmbedded:!1,ytpPreferredQualityFullscreen:!1,ytpPreferredQualityTheater:!1,ytpProgressBarOpacity:.5,ytpProgressBarAtBottom:!1,ytpTimeBasedOnPlaybackRate:!1,ytpTimeDisplayCustom:!1,ytpTimeDisplayCustomTemplate:"%current_time / %duration (%pr_remaining_time)",ytpMuteButtonShowVolume:!1,zenMode:!1,zenModeStylesBlur:4,zenModeStylesGrayscale:0,zenModeStylesOpacity:16,hotkeys:{adjustAudioPanLeft:null,adjustAudioPanRight:null,focusCommentInputOrAddTimestamp:null,backToComment:null,captureVideoFrame:null,captureVideoFramePNG:null,captureVideoFrameToClipboard:null,cycleCommentsSortBy:null,cycleMouseControlActive:null,cycleSubtitlesPosition:null,cycleYtpControlsMode:null,embedMode:null,enterPictureInPicture:null,focusSearchBox:null,getVideoDownloadLink:null,increaseSubtitlesOffsetY:null,decreaseSubtitlesOffsetY:null,toggleAudioAutoGain:null,toggleAudioCompressor:null,toggleAudioHPF:null,toggleAudioMonoMix:null,toggleCinemaMode:null,toggleContentFilters:null,toggleCleanPlayer:null,toggleCleanSite:null,toggleCommentsVisibility:null,toggleSidebarVisibility:null,toggleSkipVideoBlockGlobal:null,toggleSkipVideoBlockIndividual:null,toggleSubtitlesDisabled:null,toggleVideoDimmer:null,toggleVideoPlaybackInfo:null,toggleYtpControlsHidden:null},keyboardControlKeys:[{action:"togglePlay",key:null},{action:"seekBy",payload:"1c",key:null},{action:"seekBy",payload:"-1c",key:null},{action:"seekBy",payload:1,key:null},{action:"seekBy",payload:-1,key:null},{action:"adjustVolumeBy",payload:1,key:null},{action:"adjustVolumeBy",payload:-1,key:null},{action:"adjustPlaybackRateBy",payload:.1,key:null},{action:"adjustPlaybackRateBy",payload:-.1,key:null}],interactionZonesMouseButton:1,interactionZonesMouseButtonPresets:[{name:"Default",type:"mouseButton",gridColumns:3,gridRows:1,gridColumnsRatios:[3,6,3],gridRowsRatios:[12],actionMap:[{key:"mousedown0+g020B",action:"setPlaybackRate",payload:1},{key:"mousedown2+g020B",action:"captureVideoFrame"},{key:"mousedown0+g9B0B",action:"toggleMute"},{key:"mousedown2+g9B0B",action:"save"}]},{name:"3x1 Grid",type:"mouseButton",gridColumns:3,gridRows:1,gridColumnsRatios:[3,6,3],gridRowsRatios:[12],actionMap:[{key:"mousedown0+g020B",action:"setPlaybackRate",payload:1},{key:"mousedown2+g020B",action:"captureVideoFrame"},{key:"mousedown0+g9B0B",action:"toggleMute"},{key:"mousedown2+g9B0B",action:"save"}]},{name:"3x3 Grid",type:"mouseButton",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{action:"toggleMute",key:"mousedown0+g9B03"},{action:"toggleCommentsInSidebar",key:"mousedown2+g9B03"},{action:"toggleMute",key:"mousedown0+g9B47"},{action:"togglePlayerSettings",key:"mousedown2+g9B47"},{action:"toggleMute",key:"mousedown0+g9B8B"},{action:"save",key:"mousedown2+g9B8B"},{action:"setPlaybackRate",key:"mousedown0+g0203",payload:1},{action:"enterPictureInPicture",key:"mousedown2+g0203"},{action:"setPlaybackRate",key:"mousedown0+g0247",payload:1},{action:"toggleAppDrawer",key:"mousedown2+g0247"},{action:"setPlaybackRate",key:"mousedown0+g028B",payload:1},{action:"captureVideoFrame",key:"mousedown2+g028B"}]},{actionMap:[],gridColumns:1,gridColumnsRatios:[12],gridRows:1,gridRowsRatios:[12],name:"Empty",type:"mouseButton"}],interactionZonesMouseWheel:1,interactionZonesMouseWheelPresets:[{name:"Default",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown+g3803",action:"seekBy",payload:"-5%"},{key:"wheelup2+g3803",action:"nextVideo"},{key:"wheeldown2+g3803",action:"previousVideo"},{key:"wheelup+g3847",action:"seekBy",payload:5},{key:"wheeldown+g3847",action:"seekBy",payload:-5},{key:"wheelup2+g3847",action:"seekBy",payload:"1c"},{key:"wheeldown2+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup+g388B",action:"seekBy",payload:1},{key:"wheeldown+g388B",action:"seekBy",payload:-1},{key:"wheelup2+g388B",action:"seekBy",payload:"1f"},{key:"wheeldown2+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown+g9B8B",action:"adjustVolumeBy",payload:-1}]},{name:"3x3 Grid",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown+g3803",action:"seekBy",payload:"-5%"},{key:"wheelup2+g3803",action:"nextVideo"},{key:"wheeldown2+g3803",action:"previousVideo"},{key:"wheelup+g3847",action:"seekBy",payload:5},{key:"wheeldown+g3847",action:"seekBy",payload:-5},{key:"wheelup2+g3847",action:"seekBy",payload:"1c"},{key:"wheeldown2+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup+g388B",action:"seekBy",payload:1},{key:"wheeldown+g388B",action:"seekBy",payload:-1},{key:"wheelup2+g388B",action:"seekBy",payload:"1f"},{key:"wheeldown2+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown+g9B8B",action:"adjustVolumeBy",payload:-1}]},{name:"3x3 Grid (RMB + Wheel)",type:"mouseWheel",gridColumns:3,gridRows:3,gridColumnsRatios:[3,6,3],gridRowsRatios:[4,4,4],actionMap:[{key:"wheelup2+g0203",action:"adjustPlaybackRateBy",payload:.5},{key:"wheeldown2+g0203",action:"adjustPlaybackRateBy",payload:-.5},{key:"wheelup2+g0247",action:"adjustPlaybackRateBy",payload:.25},{key:"wheeldown2+g0247",action:"adjustPlaybackRateBy",payload:-.25},{key:"wheelup2+g028B",action:"adjustPlaybackRateBy",payload:.1},{key:"wheeldown2+g028B",action:"adjustPlaybackRateBy",payload:-.1},{key:"wheelup2+g3803",action:"seekBy",payload:"5%"},{key:"wheeldown2+g3803",action:"seekBy",payload:"-5%"},{key:"ctrl+wheelup+g3803",action:"nextVideo"},{key:"ctrl+wheeldown+g3803",action:"previousVideo"},{key:"wheelup2+g3847",action:"seekBy",payload:5},{key:"wheeldown2+g3847",action:"seekBy",payload:-5},{key:"ctrl+wheelup+g3847",action:"seekBy",payload:"1c"},{key:"ctrl+wheeldown+g3847",action:"seekBy",payload:"-1c"},{key:"wheelup2+g388B",action:"seekBy",payload:1},{key:"wheeldown2+g388B",action:"seekBy",payload:-1},{key:"ctrl+wheelup+g388B",action:"seekBy",payload:"1f"},{key:"ctrl+wheeldown+g388B",action:"seekBy",payload:"-1f"},{key:"wheelup2+g9B03",action:"adjustVolumeBy",payload:10},{key:"wheeldown2+g9B03",action:"adjustVolumeBy",payload:-10},{key:"wheelup2+g9B47",action:"adjustVolumeBy",payload:5},{key:"wheeldown2+g9B47",action:"adjustVolumeBy",payload:-5},{key:"wheelup2+g9B8B",action:"adjustVolumeBy",payload:1},{key:"wheeldown2+g9B8B",action:"adjustVolumeBy",payload:-1}]},{actionMap:[],gridColumns:1,gridColumnsRatios:[12],gridRows:1,gridRowsRatios:[12],name:"Empty",type:"mouseWheel"}],individualSettings:[]},t={altFullscreenTrigger:"mmbToggleFullscreen",instantPause:"instantTogglePlay",ytpAutoHideDelay:"ytpAutohideDelay",ytpBottomHidden:"ytpControlsHidden",ytpBottomStyle:e=>({newKey:"ytpControlsMode",newValue:"minimalistic"===e?"persistent-mini":e}),wheelControl:null},a={get:async function(o=null,a={}){const n={type:"local",validateStorage:!o,...a};return new Promise(((a,r)=>{chrome.storage[n.type].get(o,(o=>{if(chrome.runtime.lastError)return r(chrome.runtime.lastError);if(!n.validateStorage)return a(o);const i=Object.keys(o);if(Object.keys(e).every((e=>i.includes(e))))return a(o);const{migratedStorage:l,deprecatedKeys:c}=function(e={},t={}){const o={},a=[];return Object.entries(t).forEach((([t,n])=>{if(Object.prototype.hasOwnProperty.call(e,t)){if(null===n)return a.push(t);if("string"==typeof n)return o[n]=e[t],a.push(t);if("function"==typeof n){const{newKey:r,newValue:i}=n(e[t]);return o[r]=i,a.push(t)}}})),{migratedStorage:o,deprecatedKeys:a}}(o,t),s={...e,...o,hotkeys:{...e.hotkeys,...null==o?void 0:o.hotkeys},...l};chrome.storage.local.set(s,(()=>c.length&&chrome.storage.local.remove(c))),a(s)}))}))},remove:async function(e,t={},o){const a={type:"local",...t};return new Promise(((t,n)=>{chrome.storage[a.type].remove(e,(()=>{if(chrome.runtime.lastError)return n(chrome.runtime.lastError);t(o&&o())}))}))},set:async function(e,t={},o){const a={type:"local",...t};return new Promise(((t,n)=>{chrome.storage[a.type].set(e,(()=>{if(chrome.runtime.lastError)return n(chrome.runtime.lastError);t(o&&o())}))}))},onChanged:chrome.storage.onChanged};function n({customCSSCode:e,customCSS:t}){if(!t||!e)return;const o=document.createElement("style");o.id="twfyt-code-custom-css",o.textContent=e,document.head.append(o)}o(7294);const r={use:n,update:function({customCSSCode:e,customCSS:t}){const o=document.head.querySelector("#twfyt-code-custom-css");return o?t?void(o.textContent=e):o.textContent="":n({customCSS:t,customCSSCode:e})}},i=chrome.runtime.getManifest(),l=i,c=(i.name,i.name,'this.twfytSentinel||function(e,n){var a,o,r,s,l,f;twfytSentinel=(s=Array.isArray,l={},f={},{on:function(e,i){if(i){if(!a){var n=document,t=n.head;n.addEventListener("animationstart",function(e,n,t,i){if(n=f[e.animationName])for(e.stopImmediatePropagation(),t=n.length,i=0;i<t;i++)n[i](e.target)},!0),a=n.createElement("style"),t.insertBefore(a,t.firstChild),o=a.sheet,r=o.cssRules}(s(e)?e:[e]).map(function(e,n,t){(n=l[e])||(t="!"==e[0],l[e]=n=t?e.slice(1):"sentinel-"+Math.random().toString(16).slice(2),r[o.insertRule("@keyframes "+n+"{from{transform:none;}to{transform:none;}}",r.length)]._id=e,t||(r[o.insertRule(e+"{animation-duration:0.0001s;animation-name:"+n+";}",r.length)]._id=e),l[e]=n),(f[n]=f[n]||[]).push(i)})}},off:function(e,a){(s(e)?e:[e]).map(function(e,n,t,i){if(n=l[e]){if(t=f[n],a)for(i=t.length;i--;)t[i]===a&&t.splice(i,1);else t=[];if(!t.length){for(i=r.length;i--;)r[i]._id==e&&o.deleteRule(i);delete l[e],delete f[n]}}})},reset:function(){l={},f={},a&&a.parentNode.removeChild(a),a=0}}),(n=e.createEvent("HTMLEvents")).initEvent?n.initEvent("sentinel-load",!1,!1):n=new Event("sentinel-load"),e.dispatchEvent(n)}(document);'),s='var twfytKeyboardEvt;twfytKeyboardEvt=(()=>{"customJS strict";var t={748:(t,e,r)=>{function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e,r,a){"function"==typeof e&&(r.preventDefault&&t.preventDefault(),r.stopPropagation&&t.stopPropagation(),r.stopImmediatePropagation&&t.stopImmediatePropagation(),r.log&&console.log("keyboard-evt-action:",e),e(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({event:t},a)))}function c(t,e){return"key"===e?t.key.match(/Control|Shift|Alt|Meta/)?t.key.toLowerCase():"".concat(i(t,!1)).concat(t.key.toLowerCase()):"code"===e?t.code.match(/Control|Shift|Alt|Meta/)?t.code:"".concat(i(t,!0)).concat(t.code):t.key.match(/Control|Shift|Alt|Meta/)?t[e]:"".concat(i(t,!1)).concat(t[e])}function i(t,e){return["ctrl","shift","alt","meta"].filter((function(e){return t["".concat(e,"Key")]})).map((function(t){return e?t[0].toUpperCase()+t.slice(1):t})).reduce((function(t,e){return"".concat(t).concat(e,"+")}),"")}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){var e={};return Object.entries(t).forEach((function(t){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(r,n)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];a.split(" || ").forEach((function(t){return e[t]=c}))})),e}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{default:()=>d});const d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n){if(!1!==((e=y({acceptRepeat:!0,customizeKey:void 0,excludeTargets:!1,keyType:"key",log:!1,onStart:void 0,preventDefault:!0,stopPropagation:!1,stopImmediatePropagation:!1,targets:[]},e)).onStart&&e.onStart({actionMap:t,event:n,options:e}))&&(e.acceptRepeat||!n.repeat)){var o=document.activeElement;if(e.targets.length){var i=e.targets.some((function(t){return t instanceof HTMLElement?t.isEqualNode(o):"."===t[0]?f(o.classList).includes(t.slice(1)):"#"===t[0]?o.id===t.slice(1):o.nodeName===t}));if(!i&&!e.excludeTargets||i&&e.excludeTargets)return}var u=c(n,e.keyType),p=e.customizeKey&&e.customizeKey({event:n,key:u})||u,s=["code","key","keyCode","which"].map((function(t){return{keyType:t,key:c(n,t)}}));e.log&&console.log("keyboard-evt",{actionMap:t,event:n,key:p,keys:s,options:e});var b=l(t)[p];return a(n,b,e,r),{action:b,actionMap:t,event:n,key:p,keys:s,options:e}}}}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(748)})().default;',u=3===l.manifest_version;function d(e){if(u)return chrome.runtime.sendMessage({action:"loadCustomJS",payload:e});const t=document.createElement("script");t.textContent=e,document.head.append(t),t.remove()}const y=function({defaultScript:e,atLoadingScripts:t,atInteractiveScripts:o,atCompleteScripts:a},{readyState:n}={}){switch(n){case"loading":return[c,s].forEach((e=>{d(e.replace(/\n/g,""))})),t.forEach((e=>d(e)));case"interactive":return o.forEach((e=>d(e)));case"complete":return a.forEach((e=>d(e)));case"domcontentloaded":return d(e)}};function p({customJS:e,customJSCode:t}){if(!e||!t)return;const o=function(e){const t=e.match(/\/\*\s*@(loading|interactive|complete)\s*\*\/(.+?)\/\*\s*\/@\s*\*\//gms)||[];return{defaultScript:e.replace(/\/\*\s*@(loading|interactive|complete)\s*\*\/(.+?)\/\*\s*\/@\s*\*\//gms,""),atLoadingScripts:t.filter((e=>e.match(/^\/\*\s*@(loading)/))),atInteractiveScripts:t.filter((e=>e.match(/^\/\*\s*@(interactive)/))),atCompleteScripts:t.filter((e=>e.match(/^\/\*\s*@(complete)/)))}}(t);try{y(o,{readyState:"loading"})}catch{const e=setInterval((()=>{document.head&&(clearInterval(e),y(o,{readyState:"loading"}))}),50)}document.addEventListener("readystatechange",(()=>{y(o,{readyState:document.readyState})})),document.addEventListener("DOMContentLoaded",(()=>y(o,{readyState:"domcontentloaded"})))}(async()=>{let t=await a.get().catch((()=>{}));t=t||e,function(e){try{r.use(e)}catch{const t=setInterval((()=>{document.head&&(clearInterval(t),r.use(e))}),50)}}(t),p(t),a.onChanged.addListener((function(e){Object.assign(t,function(e){return[...Object.entries(e)].reduce(((e,[t,{newValue:o}])=>(e[t]=o,e)),{})}(e)),Object.entries(e).forEach((([e])=>{switch(e){case"customCSS":case"customCSSCode":return r.update(t);case"customJS":case"customJSCode":return p(t)}}))}))})()})()})();