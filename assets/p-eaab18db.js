import{d as I,a as x,p as P,f as v,h as m}from"./vue-ac677e68.js";import{n as $,e as j,a as T,v as R,f as S,g as O,i as g,h as z,j as L,d as B,A as E}from"./vue-i18n.runtime-dff17114.js";import{b as N,u as w,N as V}from"./Scrollbar-1a891e2f.js";const D=r=>{const{baseColor:e,textColor2:t,bodyColor:i,cardColor:s,dividerColor:o,actionColor:d,scrollbarColor:f,scrollbarColorHover:h,invertedColor:n}=r;return{textColor:t,textColorInverted:"#FFF",color:i,colorEmbedded:d,headerColor:s,headerColorInverted:n,footerColor:d,footerColorInverted:n,headerBorderColor:o,headerBorderColorInverted:n,footerBorderColor:o,footerBorderColorInverted:n,siderBorderColor:o,siderBorderColorInverted:n,siderColor:s,siderColorInverted:n,siderToggleButtonBorder:`1px solid ${o}`,siderToggleButtonColor:e,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:T(i,f),siderToggleBarColorHover:T(i,h),__invertScrollbar:"true"}},F=$({name:"Layout",common:j,peers:{Scrollbar:N},self:D}),H=F,J=R("n-layout-sider"),_={type:String,default:"static"},K=S("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[S("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),O("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),M={embedded:Boolean,position:_,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},k=R("n-layout");function A(r){return I({name:r?"LayoutContent":"Layout",props:Object.assign(Object.assign({},g.props),M),setup(e){const t=x(null),i=x(null),{mergedClsPrefixRef:s,inlineThemeDisabled:o}=z(e),d=g("Layout","-layout",K,H,e,s);function f(l,a){if(e.nativeScrollbar){const{value:c}=t;c&&(a===void 0?c.scrollTo(l):c.scrollTo(l,a))}else{const{value:c}=i;c&&c.scrollTo(l,a)}}P(k,e);let h=0,n=0;const C=l=>{var a;const c=l.target;h=c.scrollLeft,n=c.scrollTop,(a=e.onScroll)===null||a===void 0||a.call(e,l)};w(()=>{if(e.nativeScrollbar){const l=t.value;l&&(l.scrollTop=n,l.scrollLeft=h)}});const y={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:f},b=v(()=>{const{common:{cubicBezierEaseInOut:l},self:a}=d.value;return{"--n-bezier":l,"--n-color":e.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),u=o?L("layout",v(()=>e.embedded?"e":""),b,e):void 0;return Object.assign({mergedClsPrefix:s,scrollableElRef:t,scrollbarInstRef:i,hasSiderStyle:y,mergedTheme:d,handleNativeElScroll:C,cssVars:o?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},p)},render(){var e;const{mergedClsPrefix:t,hasSider:i}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=i?this.hasSiderStyle:void 0,o=[this.themeClass,r&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return m("div",{class:o,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,s],onScroll:this.handleNativeElScroll},this.$slots):m(V,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,s]}),this.$slots))}})}const Q=A(!1),W=S("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[B("&:first-child","margin-top: 0;"),B("&:last-child","margin-bottom: 0;")]),X=Object.assign(Object.assign({},g.props),{depth:[String,Number]}),U=I({name:"P",props:X,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=z(r),i=g("Typography","-p",W,E,r,e),s=v(()=>{const{depth:d}=r,f=d||"1",{common:{cubicBezierEaseInOut:h},self:{pFontSize:n,pLineHeight:C,pMargin:y,pTextColor:p,[`pTextColor${f}Depth`]:b}}=i.value;return{"--n-bezier":h,"--n-font-size":n,"--n-line-height":C,"--n-margin":y,"--n-text-color":d===void 0?p:b}}),o=t?L("p",v(()=>`${r.depth||""}`),s,r):void 0;return{mergedClsPrefix:e,cssVars:t?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),m("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{U as N,k as a,J as b,Q as c,H as l,_ as p};
