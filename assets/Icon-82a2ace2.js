import{i as f,o as x,d as u,t as S,h as l,f as c,m as N}from"./vue-ac677e68.js";import{u as M,k as v,E as p,F as _,f as g,d,e as w,g as m,i as y,h as D,j as P,w as I}from"./vue-i18n.runtime-dff17114.js";import{u as R}from"./utils-256917cc.js";const z=/^(\d|\.)+$/,h=/(\d|\.)+/;function B(e,{c:t=1,offset:o=0,attachPx:r=!0}={}){if(typeof e=="number"){const n=(e+o)*t;return n===0?"0":`${n}px`}else if(typeof e=="string")if(z.test(e)){const n=(Number(e)+o)*t;return r?n===0?"0":`${n}px`:`${n}`}else{const n=h.exec(e);return n?e.replace(h,String((Number(n[0])+o)*t)):e}return e}function j(e,t,o){if(!t)return;const r=M(),n=f(v,null),i=()=>{const s=o==null?void 0:o.value;t.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:p,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),n!=null&&n.preflightStyleDisabled||_.mount({id:"n-global",head:!0,anchorMetaName:p,ssr:r})};r?i():x(i)}function Z(e,t){return u({name:R(e),setup(){var o;const r=(o=f(v,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var n;const i=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n[e];return i?i():t}}})}const k=g("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("svg",`
 height: 1em;
 width: 1em;
 `)]),q=u({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){j("-base-icon",k,S(e,"clsPrefix"))},render(){return l("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),L=e=>{const{textColorBase:t,opacity1:o,opacity2:r,opacity3:n,opacity4:i,opacity5:s}=e;return{color:t,opacity1Depth:o,opacity2Depth:r,opacity3Depth:n,opacity4Depth:i,opacity5Depth:s}},F={name:"Icon",common:w,self:L},O=F,A=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[m("color-transition",{transition:"color .3s var(--n-bezier)"}),m("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),H=Object.assign(Object.assign({},y.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),K=u({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:H,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=D(e),r=y("Icon","-icon",A,O,e,t),n=c(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:a},self:b}=r.value;if(s!==void 0){const{color:$,[`opacity${s}Depth`]:C}=b;return{"--n-bezier":a,"--n-color":$,"--n-opacity":C}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),i=o?P("icon",c(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:c(()=>{const{size:s,color:a}=e;return{fontSize:B(s),color:a}}),cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:r,component:n,onRender:i,themeClass:s}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&I("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),l("i",N(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:o,[`${r}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?l(n):this.$slots)}});export{q as N,K as a,B as f,Z as r,L as s,j as u};
