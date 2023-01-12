import{d as X,f as $,h as b,n as Y,b as Z}from"./vue-ac677e68.js";import{u as oo}from"./use-rtl-1f9a466e.js";import{e as eo,d as n,f as u,q as ro,g as s,o as a,p as to,G as no,h as ao,i as T,j as so,t as w}from"./vue-i18n.runtime-dff17114.js";import{a as v,c as io}from"./resolve-slot-773a8ef5.js";import{k as lo,a as co}from"./useDebounceThrottle-71cf7b21.js";import{g as bo,N as go}from"./Close-d48d31c5.js";import{d as mo,u as P}from"./usePromise-91154b4c.js";const po={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},fo=o=>{const{primaryColor:i,borderRadius:c,lineHeight:e,fontSize:l,cardColor:t,textColor2:m,textColor1:g,dividerColor:d,fontWeightStrong:r,closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:f}=o;return Object.assign(Object.assign({},po),{lineHeight:e,color:t,colorModal:S,colorPopover:k,colorTarget:i,colorEmbedded:f,colorEmbeddedModal:f,colorEmbeddedPopover:f,textColor:m,titleTextColor:g,borderColor:d,actionColor:f,titleFontWeight:r,closeColorHover:z,closeColorPressed:C,closeBorderRadius:c,closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:x,fontSizeSmall:l,fontSizeMedium:l,fontSizeLarge:l,fontSizeHuge:l,boxShadow:y,borderRadius:c})},vo={name:"Card",common:eo,self:fo},uo=vo,ho=n([u("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ro({background:"var(--n-color-modal)"}),s("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),s("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),s("content-soft-segmented",[n(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),s("footer-segmented",[n(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),s("footer-soft-segmented",[n(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[u("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),u("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),s("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),s("action-segmented",[n(">",[a("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("content-segmented, content-soft-segmented",[n(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("footer-segmented, footer-soft-segmented",[n(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("embedded",`
 background-color: var(--n-color-embedded);
 `)]),to(u("card",`
 background: var(--n-color-modal);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),no(u("card",`
 background: var(--n-color-popover);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),R={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},To=lo(R),xo=Object.assign(Object.assign({},T.props),R),Po=X({name:"Card",props:xo,setup(o){const i=()=>{const{onClose:r}=o;r&&io(r)},{inlineThemeDisabled:c,mergedClsPrefixRef:e,mergedRtlRef:l}=ao(o),t=T("Card","-card",ho,uo,o,e),m=oo("Card",l,e),g=$(()=>{const{size:r}=o,{self:{color:p,colorModal:h,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:f,lineHeight:B,closeIconColor:M,closeIconColorHover:O,closeIconColorPressed:E,closeColorHover:_,closeColorPressed:j,closeBorderRadius:H,closeIconSize:F,closeSize:I,boxShadow:W,colorPopover:L,colorEmbedded:N,colorEmbeddedModal:V,colorEmbeddedPopover:K,[w("padding",r)]:q,[w("fontSize",r)]:A,[w("titleFontSize",r)]:D},common:{cubicBezierEaseInOut:G}}=t.value,{top:U,left:J,bottom:Q}=bo(q);return{"--n-bezier":G,"--n-border-radius":f,"--n-color":p,"--n-color-modal":h,"--n-color-popover":L,"--n-color-embedded":N,"--n-color-embedded-modal":V,"--n-color-embedded-popover":K,"--n-color-target":x,"--n-text-color":z,"--n-line-height":B,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":M,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":E,"--n-close-color-hover":_,"--n-close-color-pressed":j,"--n-border-color":y,"--n-box-shadow":W,"--n-padding-top":U,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":I,"--n-close-icon-size":F,"--n-close-border-radius":H}}),d=c?so("card",$(()=>o.size[0]),g,o):void 0;return{rtlEnabled:m,mergedClsPrefix:e,mergedTheme:t,handleCloseClick:i,cssVars:c?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:o,bordered:i,hoverable:c,mergedClsPrefix:e,rtlEnabled:l,onRender:t,embedded:m,tag:g,$slots:d}=this;return t==null||t(),b(g,{class:[`${e}-card`,this.themeClass,m&&`${e}-card--embedded`,{[`${e}-card--rtl`]:l,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:i,[`${e}-card--hoverable`]:c}],style:this.cssVars,role:this.role},v(d.cover,r=>r&&b("div",{class:`${e}-card-cover`,role:"none"},r)),v(d.header,r=>r||this.title||this.closable?b("div",{class:`${e}-card-header`,style:this.headerStyle},b("div",{class:`${e}-card-header__main`,role:"heading"},r||this.title),v(d["header-extra"],p=>p&&b("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?b(go,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),v(d.default,r=>r&&b("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},r)),v(d.footer,r=>r&&[b("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},r)]),v(d.action,r=>r&&b("div",{class:`${e}-card__action`,role:"none"},r)))}});function Ro(o){const[i,c]=mo(),e=P(),l=co(t=>{e.commit("setWidth",t)},100);return Y(()=>{var t;o.value&&(c(new ResizeObserver(m=>{const g=m[0].contentBoxSize[0].inlineSize;l(g)})),(t=i.value)==null||t.observe(o.value,{box:"content-box"}))}),Z(()=>{var t;return(t=i.value)==null?void 0:t.disconnect()}),{observer:i}}function Bo(){const o=P();return{isMobile:$(()=>o.state.isMobile)}}export{Po as N,R as a,To as b,uo as c,Ro as d,fo as s,Bo as u};
