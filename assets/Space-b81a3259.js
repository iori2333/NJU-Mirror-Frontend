import{E as he,F as ge,aE as pe,d as K,a as ue,p as be,t as fe,f as F,h as S}from"./vue-ac677e68.js";import{u as J}from"./use-rtl-1f9a466e.js";import{e as Ce,b as n,f as me,g as y,o as z,x as P,d as $,h as q,i as B,j as ve,v as xe,t as u}from"./vue-i18n.runtime-dff17114.js";import{a as U,c as ke}from"./resolve-slot-773a8ef5.js";import{N as ye,a as Se,d as V}from"./Close-d48d31c5.js";import{c as D,i as ze}from"./is-browser-ba3c406d.js";function Ie(e,t="default",o=[]){const c=e.$slots[t];return c===void 0?o:c()}function L(e,t=!0,o=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&o.push(he(String(r)));return}if(Array.isArray(r)){L(r,t,o);return}if(r.type===ge){if(r.children===null)return;Array.isArray(r.children)&&L(r.children,t,o)}else r.type!==pe&&o.push(r)}}),o}const Pe={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},$e=e=>{const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:c,infoColor:l,successColor:h,warningColor:i,errorColor:d,baseColor:f,borderColor:x,opacityDisabled:C,tagColor:b,closeIconColor:a,closeIconColorHover:s,closeIconColorPressed:v,borderRadiusSmall:g,fontSizeMini:p,fontSizeTiny:k,fontSizeSmall:I,fontSizeMedium:m,heightMini:R,heightTiny:H,heightSmall:M,heightMedium:w,closeColorHover:E,closeColorPressed:T,buttonColor2Hover:j,buttonColor2Pressed:W,fontWeightStrong:O}=e;return Object.assign(Object.assign({},Pe),{closeBorderRadius:g,heightTiny:R,heightSmall:H,heightMedium:M,heightLarge:w,borderRadius:g,opacityDisabled:C,fontSizeTiny:p,fontSizeSmall:k,fontSizeMedium:I,fontSizeLarge:m,fontWeightStrong:O,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:f,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:W,colorChecked:c,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${x}`,textColor:t,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:a,closeIconColorHover:s,closeIconColorPressed:v,closeColorHover:E,closeColorPressed:T,borderPrimary:`1px solid ${n(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:n(c,{alpha:.12}),colorBorderedPrimary:n(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:n(c,{alpha:.12}),closeColorPressedPrimary:n(c,{alpha:.18}),borderInfo:`1px solid ${n(l,{alpha:.3})}`,textColorInfo:l,colorInfo:n(l,{alpha:.12}),colorBorderedInfo:n(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:n(l,{alpha:.12}),closeColorPressedInfo:n(l,{alpha:.18}),borderSuccess:`1px solid ${n(h,{alpha:.3})}`,textColorSuccess:h,colorSuccess:n(h,{alpha:.12}),colorBorderedSuccess:n(h,{alpha:.1}),closeIconColorSuccess:h,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:h,closeColorHoverSuccess:n(h,{alpha:.12}),closeColorPressedSuccess:n(h,{alpha:.18}),borderWarning:`1px solid ${n(i,{alpha:.35})}`,textColorWarning:i,colorWarning:n(i,{alpha:.15}),colorBorderedWarning:n(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:n(i,{alpha:.12}),closeColorPressedWarning:n(i,{alpha:.18}),borderError:`1px solid ${n(d,{alpha:.23})}`,textColorError:d,colorError:n(d,{alpha:.1}),colorBorderedError:n(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:n(d,{alpha:.12}),closeColorPressedError:n(d,{alpha:.18})})},Be={name:"Tag",common:Ce,self:$e},Re=Be,He={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Me=me("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),y("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),y("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),y("icon, avatar",[y("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),y("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),y("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[P("disabled",[$("&:hover","background-color: var(--n-color-hover-checkable);",[P("checked","color: var(--n-text-color-hover-checkable);")]),$("&:active","background-color: var(--n-color-pressed-checkable);",[P("checked","color: var(--n-text-color-pressed-checkable);")])]),y("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[P("disabled",[$("&:hover","background-color: var(--n-color-checked-hover);"),$("&:active","background-color: var(--n-color-checked-pressed);")])])])]),we=Object.assign(Object.assign(Object.assign({},B.props),He),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ee=xe("n-tag"),Ke=K({name:"Tag",props:we,setup(e){const t=ue(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:c,mergedRtlRef:l}=q(e),h=B("Tag","-tag",Me,Re,e,r);be(Ee,{roundRef:fe(e,"round")});function i(a){if(!e.disabled&&e.checkable){const{checked:s,onCheckedChange:v,onUpdateChecked:g,"onUpdate:checked":p}=e;g&&g(!s),p&&p(!s),v&&v(!s)}}function d(a){if(e.triggerClickOnClose||a.stopPropagation(),!e.disabled){const{onClose:s}=e;s&&ke(s,a)}}const f={setTextContent(a){const{value:s}=t;s&&(s.textContent=a)}},x=J("Tag",l,r),C=F(()=>{const{type:a,size:s,color:{color:v,textColor:g}={}}=e,{common:{cubicBezierEaseInOut:p},self:{padding:k,closeMargin:I,closeMarginRtl:m,borderRadius:R,opacityDisabled:H,textColorCheckable:M,textColorHoverCheckable:w,textColorPressedCheckable:E,textColorChecked:T,colorCheckable:j,colorHoverCheckable:W,colorPressedCheckable:O,colorChecked:Q,colorCheckedHover:X,colorCheckedPressed:Y,closeBorderRadius:Z,fontWeightStrong:N,[u("colorBordered",a)]:ee,[u("closeSize",s)]:oe,[u("closeIconSize",s)]:re,[u("fontSize",s)]:le,[u("height",s)]:A,[u("color",a)]:ae,[u("textColor",a)]:ne,[u("border",a)]:te,[u("closeIconColor",a)]:G,[u("closeIconColorHover",a)]:ce,[u("closeIconColorPressed",a)]:se,[u("closeColorHover",a)]:ie,[u("closeColorPressed",a)]:de}}=h.value;return{"--n-font-weight-strong":N,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":p,"--n-border-radius":R,"--n-border":te,"--n-close-icon-size":re,"--n-close-color-pressed":de,"--n-close-color-hover":ie,"--n-close-border-radius":Z,"--n-close-icon-color":G,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":se,"--n-close-icon-color-disabled":G,"--n-close-margin":I,"--n-close-margin-rtl":m,"--n-close-size":oe,"--n-color":v||(o.value?ee:ae),"--n-color-checkable":j,"--n-color-checked":Q,"--n-color-checked-hover":X,"--n-color-checked-pressed":Y,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":O,"--n-font-size":le,"--n-height":A,"--n-opacity-disabled":H,"--n-padding":k,"--n-text-color":g||ne,"--n-text-color-checkable":M,"--n-text-color-checked":T,"--n-text-color-hover-checkable":w,"--n-text-color-pressed-checkable":E}}),b=c?ve("tag",F(()=>{let a="";const{type:s,size:v,color:{color:g,textColor:p}={}}=e;return a+=s[0],a+=v[0],g&&(a+=`a${D(g)}`),p&&(a+=`b${D(p)}`),o.value&&(a+="c"),a}),C,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:x,mergedClsPrefix:r,contentRef:t,mergedBordered:o,handleClick:i,handleCloseClick:d,cssVars:c?void 0:C,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:r,closable:c,color:{borderColor:l}={},round:h,onRender:i,$slots:d}=this;i==null||i();const f=U(d.avatar,C=>C&&S("div",{class:`${o}-tag__avatar`},C)),x=U(d.icon,C=>C&&S("div",{class:`${o}-tag__icon`},C));return S("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:h,[`${o}-tag--avatar`]:f,[`${o}-tag--icon`]:x,[`${o}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||f,S("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&c?S(ye,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:h,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?S("div",{class:`${o}-tag__border`,style:{borderColor:l}}):null)}}),Te={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},je=()=>Te,We={name:"Space",self:je},Oe=We;let _;const _e=()=>{if(!ze)return!0;if(_===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),_=t}return _},Fe=Object.assign(Object.assign({},B.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Je=K({name:"Space",props:Fe,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=q(e),r=B("Space","-space",void 0,Oe,e,t),c=J("Space",o,t);return{useGap:_e(),rtlEnabled:c,mergedClsPrefix:t,margin:F(()=>{const{size:l}=e;if(Array.isArray(l))return{horizontal:l[0],vertical:l[1]};if(typeof l=="number")return{horizontal:l,vertical:l};const{self:{[u("gap",l)]:h}}=r.value,{row:i,col:d}=Se(h);return{horizontal:V(d),vertical:V(i)}})}},render(){const{vertical:e,align:t,inline:o,justify:r,itemStyle:c,margin:l,wrap:h,mergedClsPrefix:i,rtlEnabled:d,useGap:f,wrapItem:x,internalUseGap:C}=this,b=L(Ie(this));if(!b.length)return null;const a=`${l.horizontal}px`,s=`${l.horizontal/2}px`,v=`${l.vertical}px`,g=`${l.vertical/2}px`,p=b.length-1,k=r.startsWith("space-");return S("div",{role:"none",class:[`${i}-space`,d&&`${i}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!h||e?"nowrap":"wrap",marginTop:f||e?"":`-${g}`,marginBottom:f||e?"":`-${g}`,alignItems:t,gap:f?`${l.vertical}px ${l.horizontal}px`:""}},!x&&(f||C)?b:b.map((I,m)=>S("div",{role:"none",style:[c,{maxWidth:"100%"},f?"":e?{marginBottom:m!==p?v:""}:d?{marginLeft:k?r==="space-between"&&m===p?"":s:m!==p?a:"",marginRight:k?r==="space-between"&&m===0?"":s:"",paddingTop:g,paddingBottom:g}:{marginRight:k?r==="space-between"&&m===p?"":s:m!==p?a:"",marginLeft:k?r==="space-between"&&m===0?"":s:"",paddingTop:g,paddingBottom:g}]},I)))}});export{Je as N,Te as a,Ke as b,Pe as c,L as f,Ie as g};
