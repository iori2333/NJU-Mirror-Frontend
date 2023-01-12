import{f as M,a as j,w as Do,c as Ro,r as Go,i as bo,p as _o,b as ho,d as K,h as u,T as xo,s as Mo,t as go,n as Lo}from"./vue-ac677e68.js";import{v as vo,d as v,c as mo,f as V,o as c,a as po,e as Oo,g as E,x as lo,i as yo,h as jo,t as s,b as U,j as No}from"./vue-i18n.runtime-dff17114.js";import{u as Ao}from"./use-rtl-1f9a466e.js";import{i as Z,c as co}from"./is-browser-ba3c406d.js";import{a as uo,i as Vo,c as Ko}from"./resolve-slot-773a8ef5.js";import{u as Co}from"./Icon-82a2ace2.js";function Qo(o){const n=M(o),a=j(n.value);return Do(n,l=>{a.value=l}),typeof o=="function"?a:{__v_isRef:!0,get value(){return a.value},set value(l){o.set(l)}}}function qo(){const o=j(!1);return Ro(()=>{o.value=!0}),Go(o)}const fo=vo("n-form-item");function Yo(o,{defaultSize:n="medium",mergedSize:a,mergedDisabled:l}={}){const i=bo(fo,null);_o(fo,null);const g=M(a?()=>a(i):()=>{const{size:b}=o;if(b)return b;if(i){const{mergedSize:N}=i;if(N.value!==void 0)return N.value}return n}),W=M(l?()=>l(i):()=>{const{disabled:b}=o;return b!==void 0?b:i?i.disabled.value:!1}),r=M(()=>{const{status:b}=o;return b||(i==null?void 0:i.mergedValidationStatus.value)});return ho(()=>{i&&i.restoreValidation()}),{mergedSizeRef:g,mergedDisabledRef:W,mergedStatusRef:r,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}const wo=K({name:"BaseIconSwitchTransition",setup(o,{slots:n}){const a=qo();return()=>u(xo,{name:"icon-switch-transition",appear:a.value},n)}}),Xo=K({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(o,{slots:n}){function a(r){o.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function l(r){o.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:b}=o;b&&b()}function i(r){o.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:b}=o;b&&b()}function g(r){if(r.style.transition="none",o.width){const b=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${b}px`}else if(o.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const b=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${b}px`}r.offsetWidth}function W(r){var b;o.width?r.style.maxWidth="":o.reverse||(r.style.maxHeight=""),(b=o.onAfterEnter)===null||b===void 0||b.call(o)}return()=>{const r=o.group?Mo:xo;return u(r,{name:o.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:o.mode,appear:o.appear,onEnter:g,onAfterEnter:W,onBeforeLeave:a,onLeave:l,onAfterLeave:i},n)}}}),{cubicBezierEaseInOut:Uo}=mo;function io({originalTransform:o="",left:n=0,top:a=0,transition:l=`all .3s ${Uo} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:n,top:a,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:n,top:a,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:a,transition:l})]}const Jo=v([v("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),v("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),v("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),v("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),c("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[c("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),c("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[c("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),c("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),c("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Zo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},oe=K({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Zo),setup(o){Co("-base-loading",Jo,go(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:n,strokeWidth:a,stroke:l,scale:i}=this,g=n/i;return u("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},u(wo,null,{default:()=>this.show?u("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},u("div",{class:`${o}-base-loading__container`},u("div",{class:`${o}-base-loading__container-layer`},u("div",{class:`${o}-base-loading__container-layer-left`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:n-a/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),u("div",{class:`${o}-base-loading__container-layer-patch`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:n-a/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),u("div",{class:`${o}-base-loading__container-layer-right`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:n-a/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):u("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),ee=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),re=K({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){Co("-base-wave",ee,go(o,"clsPrefix"));const n=j(null),a=j(!1);let l=null;return ho(()=>{l!==null&&window.clearTimeout(l)}),{active:a,selfRef:n,play(){l!==null&&(window.clearTimeout(l),a.value=!1,l=null),Lo(()=>{var i;(i=n.value)===null||i===void 0||i.offsetHeight,a.value=!0,l=window.setTimeout(()=>{a.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:o}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:_}=mo;function te({duration:o=".2s",delay:n=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_},
 max-width ${o} ${_} ${n},
 margin-left ${o} ${_} ${n},
 margin-right ${o} ${_} ${n};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_} ${n},
 max-width ${o} ${_},
 margin-left ${o} ${_},
 margin-right ${o} ${_};
 `)]}const ne=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const ie=Z&&navigator.userAgent.includes("Safari")&&!ne;function O(o){return po(o,[255,255,255,.16])}function J(o){return po(o,[0,0,0,.12])}const se=vo("n-button-group"),ae={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},le=o=>{const{heightTiny:n,heightSmall:a,heightMedium:l,heightLarge:i,borderRadius:g,fontSizeTiny:W,fontSizeSmall:r,fontSizeMedium:b,fontSizeLarge:N,opacityDisabled:oo,textColor2:S,textColor3:eo,primaryColorHover:y,primaryColorPressed:k,borderColor:Q,primaryColor:F,baseColor:f,infoColor:I,infoColorHover:$,infoColorPressed:t,successColor:h,successColorHover:w,successColorPressed:e,warningColor:H,warningColorHover:T,warningColorPressed:R,errorColor:z,errorColorHover:C,errorColorPressed:G,fontWeight:D,buttonColor2:A,buttonColor2Hover:B,buttonColor2Pressed:x,fontWeightStrong:q}=o;return Object.assign(Object.assign({},ae),{heightTiny:n,heightSmall:a,heightMedium:l,heightLarge:i,borderRadiusTiny:g,borderRadiusSmall:g,borderRadiusMedium:g,borderRadiusLarge:g,fontSizeTiny:W,fontSizeSmall:r,fontSizeMedium:b,fontSizeLarge:N,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:A,colorSecondaryHover:B,colorSecondaryPressed:x,colorTertiary:A,colorTertiaryHover:B,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:B,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:S,textColorTertiary:eo,textColorHover:y,textColorPressed:k,textColorFocus:y,textColorDisabled:S,textColorText:S,textColorTextHover:y,textColorTextPressed:k,textColorTextFocus:y,textColorTextDisabled:S,textColorGhost:S,textColorGhostHover:y,textColorGhostPressed:k,textColorGhostFocus:y,textColorGhostDisabled:S,border:`1px solid ${Q}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${k}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${Q}`,rippleColor:F,colorPrimary:F,colorHoverPrimary:y,colorPressedPrimary:k,colorFocusPrimary:y,colorDisabledPrimary:F,textColorPrimary:f,textColorHoverPrimary:f,textColorPressedPrimary:f,textColorFocusPrimary:f,textColorDisabledPrimary:f,textColorTextPrimary:F,textColorTextHoverPrimary:y,textColorTextPressedPrimary:k,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:S,textColorGhostPrimary:F,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:k,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:F,borderPrimary:`1px solid ${F}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${k}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${F}`,rippleColorPrimary:F,colorInfo:I,colorHoverInfo:$,colorPressedInfo:t,colorFocusInfo:$,colorDisabledInfo:I,textColorInfo:f,textColorHoverInfo:f,textColorPressedInfo:f,textColorFocusInfo:f,textColorDisabledInfo:f,textColorTextInfo:I,textColorTextHoverInfo:$,textColorTextPressedInfo:t,textColorTextFocusInfo:$,textColorTextDisabledInfo:S,textColorGhostInfo:I,textColorGhostHoverInfo:$,textColorGhostPressedInfo:t,textColorGhostFocusInfo:$,textColorGhostDisabledInfo:I,borderInfo:`1px solid ${I}`,borderHoverInfo:`1px solid ${$}`,borderPressedInfo:`1px solid ${t}`,borderFocusInfo:`1px solid ${$}`,borderDisabledInfo:`1px solid ${I}`,rippleColorInfo:I,colorSuccess:h,colorHoverSuccess:w,colorPressedSuccess:e,colorFocusSuccess:w,colorDisabledSuccess:h,textColorSuccess:f,textColorHoverSuccess:f,textColorPressedSuccess:f,textColorFocusSuccess:f,textColorDisabledSuccess:f,textColorTextSuccess:h,textColorTextHoverSuccess:w,textColorTextPressedSuccess:e,textColorTextFocusSuccess:w,textColorTextDisabledSuccess:S,textColorGhostSuccess:h,textColorGhostHoverSuccess:w,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:w,textColorGhostDisabledSuccess:h,borderSuccess:`1px solid ${h}`,borderHoverSuccess:`1px solid ${w}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${w}`,borderDisabledSuccess:`1px solid ${h}`,rippleColorSuccess:h,colorWarning:H,colorHoverWarning:T,colorPressedWarning:R,colorFocusWarning:T,colorDisabledWarning:H,textColorWarning:f,textColorHoverWarning:f,textColorPressedWarning:f,textColorFocusWarning:f,textColorDisabledWarning:f,textColorTextWarning:H,textColorTextHoverWarning:T,textColorTextPressedWarning:R,textColorTextFocusWarning:T,textColorTextDisabledWarning:S,textColorGhostWarning:H,textColorGhostHoverWarning:T,textColorGhostPressedWarning:R,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:H,borderWarning:`1px solid ${H}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${R}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${H}`,rippleColorWarning:H,colorError:z,colorHoverError:C,colorPressedError:G,colorFocusError:C,colorDisabledError:z,textColorError:f,textColorHoverError:f,textColorPressedError:f,textColorFocusError:f,textColorDisabledError:f,textColorTextError:z,textColorTextHoverError:C,textColorTextPressedError:G,textColorTextFocusError:C,textColorTextDisabledError:S,textColorGhostError:z,textColorGhostHoverError:C,textColorGhostPressedError:G,textColorGhostFocusError:C,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${G}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:q})},de={name:"Button",common:Oo,self:le},ce=de,ue=v([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[E("color",[c("border",{borderColor:"var(--n-border-color)"}),E("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),lo("disabled",[v("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),E("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),E("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),lo("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),E("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),E("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[E("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),te()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),E("block",`
 display: flex;
 width: 100%;
 `),E("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),E("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),fe=Object.assign(Object.assign({},yo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!ie}}),be=K({name:"Button",props:fe,setup(o){const n=j(null),a=j(null),l=j(!1),i=Qo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),g=bo(se,{}),{mergedSizeRef:W}=Yo({},{defaultSize:"medium",mergedSize:t=>{const{size:h}=o;if(h)return h;const{size:w}=g;if(w)return w;const{mergedSize:e}=t||{};return e?e.value:"medium"}}),r=M(()=>o.focusable&&!o.disabled),b=t=>{var h;r.value||t.preventDefault(),!o.nativeFocusBehavior&&(t.preventDefault(),!o.disabled&&r.value&&((h=n.value)===null||h===void 0||h.focus({preventScroll:!0})))},N=t=>{var h;if(!o.disabled&&!o.loading){const{onClick:w}=o;w&&Ko(w,t),o.text||(h=a.value)===null||h===void 0||h.play()}},oo=t=>{switch(t.key){case"Enter":if(!o.keyboard)return;l.value=!1}},S=t=>{switch(t.key){case"Enter":if(!o.keyboard||o.loading){t.preventDefault();return}l.value=!0}},eo=()=>{l.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:k,mergedRtlRef:Q}=jo(o),F=yo("Button","-button",ue,ce,o,k),f=Ao("Button",Q,k),I=M(()=>{const t=F.value,{common:{cubicBezierEaseInOut:h,cubicBezierEaseOut:w},self:e}=t,{rippleDuration:H,opacityDisabled:T,fontWeight:R,fontWeightStrong:z}=e,C=W.value,{dashed:G,type:D,ghost:A,text:B,color:x,round:q,circle:ro,textColor:L,secondary:Po,tertiary:so,quaternary:$o,strong:So}=o,To={"font-weight":So?z:R};let m={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=D==="tertiary",ao=D==="default",d=Y?"default":D;if(B){const p=L||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||e[s("textColorText",d)],"--n-text-color-hover":p?O(p):e[s("textColorTextHover",d)],"--n-text-color-pressed":p?J(p):e[s("textColorTextPressed",d)],"--n-text-color-focus":p?O(p):e[s("textColorTextHover",d)],"--n-text-color-disabled":p||e[s("textColorTextDisabled",d)]}}else if(A||G){const p=L||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||e[s("rippleColor",d)],"--n-text-color":p||e[s("textColorGhost",d)],"--n-text-color-hover":p?O(p):e[s("textColorGhostHover",d)],"--n-text-color-pressed":p?J(p):e[s("textColorGhostPressed",d)],"--n-text-color-focus":p?O(p):e[s("textColorGhostHover",d)],"--n-text-color-disabled":p||e[s("textColorGhostDisabled",d)]}}else if(Po){const p=ao?e.textColor:Y?e.textColorTertiary:e[s("color",d)],P=x||p,X=D!=="default"&&D!=="tertiary";m={"--n-color":X?U(P,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?U(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?U(P,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?U(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":P,"--n-text-color-hover":P,"--n-text-color-pressed":P,"--n-text-color-focus":P,"--n-text-color-disabled":P}}else if(so||$o){const p=ao?e.textColor:Y?e.textColorTertiary:e[s("color",d)],P=x||p;so?(m["--n-color"]=e.colorTertiary,m["--n-color-hover"]=e.colorTertiaryHover,m["--n-color-pressed"]=e.colorTertiaryPressed,m["--n-color-focus"]=e.colorSecondaryHover,m["--n-color-disabled"]=e.colorTertiary):(m["--n-color"]=e.colorQuaternary,m["--n-color-hover"]=e.colorQuaternaryHover,m["--n-color-pressed"]=e.colorQuaternaryPressed,m["--n-color-focus"]=e.colorQuaternaryHover,m["--n-color-disabled"]=e.colorQuaternary),m["--n-ripple-color"]="#0000",m["--n-text-color"]=P,m["--n-text-color-hover"]=P,m["--n-text-color-pressed"]=P,m["--n-text-color-focus"]=P,m["--n-text-color-disabled"]=P}else m={"--n-color":x||e[s("color",d)],"--n-color-hover":x?O(x):e[s("colorHover",d)],"--n-color-pressed":x?J(x):e[s("colorPressed",d)],"--n-color-focus":x?O(x):e[s("colorFocus",d)],"--n-color-disabled":x||e[s("colorDisabled",d)],"--n-ripple-color":x||e[s("rippleColor",d)],"--n-text-color":L||(x?e.textColorPrimary:Y?e.textColorTertiary:e[s("textColor",d)]),"--n-text-color-hover":L||(x?e.textColorHoverPrimary:e[s("textColorHover",d)]),"--n-text-color-pressed":L||(x?e.textColorPressedPrimary:e[s("textColorPressed",d)]),"--n-text-color-focus":L||(x?e.textColorFocusPrimary:e[s("textColorFocus",d)]),"--n-text-color-disabled":L||(x?e.textColorDisabledPrimary:e[s("textColorDisabled",d)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};B?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[s("border",d)],"--n-border-hover":e[s("borderHover",d)],"--n-border-pressed":e[s("borderPressed",d)],"--n-border-focus":e[s("borderFocus",d)],"--n-border-disabled":e[s("borderDisabled",d)]};const{[s("height",C)]:no,[s("fontSize",C)]:ko,[s("padding",C)]:Ho,[s("paddingRound",C)]:zo,[s("iconSize",C)]:Bo,[s("borderRadius",C)]:Fo,[s("iconMargin",C)]:Io,waveOpacity:Eo}=e,Wo={"--n-width":ro&&!B?no:"initial","--n-height":B?"initial":no,"--n-font-size":ko,"--n-padding":ro||B?"initial":q?zo:Ho,"--n-icon-size":Bo,"--n-icon-margin":Io,"--n-border-radius":B?"initial":ro||q?no:Fo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":h,"--n-bezier-ease-out":w,"--n-ripple-duration":H,"--n-opacity-disabled":T,"--n-wave-opacity":Eo},To),m),to),Wo)}),$=y?No("button",M(()=>{let t="";const{dashed:h,type:w,ghost:e,text:H,color:T,round:R,circle:z,textColor:C,secondary:G,tertiary:D,quaternary:A,strong:B}=o;h&&(t+="a"),e&&(t+="b"),H&&(t+="c"),R&&(t+="d"),z&&(t+="e"),G&&(t+="f"),D&&(t+="g"),A&&(t+="h"),B&&(t+="i"),T&&(t+="j"+co(T)),C&&(t+="k"+co(C));const{value:x}=W;return t+="l"+x[0],t+="m"+w[0],t}),I,o):void 0;return{selfElRef:n,waveElRef:a,mergedClsPrefix:k,mergedFocusable:r,mergedSize:W,showBorder:i,enterPressed:l,rtlEnabled:f,handleMousedown:b,handleKeydown:S,handleBlur:eo,handleKeyup:oo,handleClick:N,customColorCssVars:M(()=>{const{color:t}=o;if(!t)return null;const h=O(t);return{"--n-border-color":t,"--n-border-color-hover":h,"--n-border-color-pressed":J(t),"--n-border-color-focus":h,"--n-border-color-disabled":t}}),cssVars:y?void 0:I,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{mergedClsPrefix:o,tag:n,onRender:a}=this;a==null||a();const l=uo(this.$slots.default,i=>i&&u("span",{class:`${o}-button__content`},i));return u(n,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,u(Xo,{width:!0},{default:()=>uo(this.$slots.icon,i=>(this.loading||this.renderIcon||i)&&u("span",{class:`${o}-button__icon`,style:{margin:Vo(this.$slots.default)?"0":""}},u(wo,null,{default:()=>this.loading?u(oe,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():i)})))}),this.iconPlacement==="left"&&l,this.text?null:u(re,{ref:"waveElRef",clsPrefix:o}),this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),ye=be;export{ye as N,Xo as a,ce as b,io as c,wo as d,oe as e,Yo as f,ie as g,se as h,qo as i,le as s,Qo as u};
