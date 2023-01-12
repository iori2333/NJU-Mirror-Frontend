import{d as u,p,h as g,u as h,x as m,y as b}from"./vue-ac677e68.js";import{u as $}from"./use-rtl-1f9a466e.js";import{h as x}from"./Button-54a41a0d.js";import{f as s,x as d,d as o,g as e,o as l,h as w}from"./vue-i18n.runtime-dff17114.js";import{u as y}from"./Icon-82a2ace2.js";const t="0!important",f="-1px!important";function i(r){return e(r+"-type",[o("& +",[s("button",{},[e(r+"-type",[l("border",{borderLeftWidth:t}),l("state-border",{left:f})])])])])}function n(r){return e(r+"-type",[o("& +",[s("button",[e(r+"-type",[l("border",{borderTopWidth:t}),l("state-border",{top:f})])])])])}const v=s("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[s("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),e("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),e("vertical",{flexDirection:"column"},[s("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),e("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),B={size:{type:String,default:void 0},vertical:Boolean},S=u({name:"ButtonGroup",props:B,setup(r){const{mergedClsPrefixRef:a,mergedRtlRef:c}=w(r);return y("-button-group",v,a),p(x,r),{rtlEnabled:$("ButtonGroup",c,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:r}=this;return g("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}}),C={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_=b("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z",fill:"currentColor"},null,-1),G=[_],z=u({name:"LogoGithub",render:function(a,c){return h(),m("svg",C,G)}});export{z as L,S as N};
