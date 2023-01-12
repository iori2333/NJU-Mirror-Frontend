import{h as s,d,t as u}from"./vue-ac677e68.js";import{f,g as i,d as t,x as b}from"./vue-i18n.runtime-dff17114.js";import{r as g,u as p,N as h}from"./Icon-82a2ace2.js";function L(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function y(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function B(e,n){const o=e.trim().split(/\s+/g),r={top:o[0]};switch(o.length){case 1:r.right=o[0],r.bottom=o[0],r.left=o[0];break;case 2:r.right=o[1],r.left=o[1],r.bottom=o[0];break;case 3:r.right=o[1],r.bottom=o[2],r.left=o[1];break;case 4:r.right=o[1],r.bottom=o[2],r.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}function z(e,n){const[o,r]=e.split(" ");return n?n==="row"?o:r:{row:o,col:r||o}}const m=g("close",s("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),v=f("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[i("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),b("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),i("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),i("round",[t("&::before",`
 border-radius: 50%;
 `)])]),N=d({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return p("-base-close",v,u(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:o,absolute:r,round:l,isButtonTag:a}=e;return s(a?"button":"div",{type:a?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:a?void 0:"button",disabled:o,class:[`${n}-base-close`,r&&`${n}-base-close--absolute`,o&&`${n}-base-close--disabled`,l&&`${n}-base-close--round`],onMousedown:c=>{e.focusable||c.preventDefault()},onClick:e.onClick},s(h,{clsPrefix:n},{default:()=>s(m,null)}))}}});export{N,z as a,L as d,B as g,y as p};
