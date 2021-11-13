import{h as b,p as B,c as _,j as r,k as n,i as I,F as z,D as x,E as w,B as h,P as N,b as L,K as j,J as l,I as f,f as C,L as R,N as D}from"./vue.d09c2211.js";import{s as u,f as d,q as M,g as s,T as O,U as T,h as P,j as $,az as V,aA as F,aB as H,ak as K,am as q,ao as A,an as J,ar as U,ap as W,ae as G}from"./index.7e178671.js";import{N as Q}from"./Result.4b6e299d.js";import"./utils.988a71ed.js";var X=u([d("list",`
 --merged-border-color: var(--border-color);
 --merged-color: var(--color)
 font-size: var(--font-size);
 transition:
 background-color .3s var(--bezier),
 color .3s var(--bezier),
 border-color .3s var(--bezier);
 padding: 0;
 list-style-type: none;
 color: var(--text-color);
 background-color: var(--merged-color);
 `,[M("bordered",`
 border-radius: var(--border-radius);
 border: 1px solid var(--merged-border-color);
 `,[d("list-item",`
 padding: 12px 20px;
 `,[u("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)]),s("header, footer",`
 padding: 12px 20px;
 `,[u("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)])]),s("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--bezier);
 `,[u("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)]),d("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--bezier);
 `,[s("prefix",`
 margin-right: 20px;
 flex: 0;
 `),s("suffix",`
 margin-left: 20px;
 flex: 0;
 `),s("main",`
 flex: 1;
 `),u("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)])]),O(d("list",`
 --merged-color: var(--color-modal);
 --merged-border-color: var(--border-color-modal);
 `)),T(d("list",`
 --merged-color: var(--color-popover);
 --merged-border-color: var(--border-color-popover);
 `))]);const Y=Object.assign(Object.assign({},$.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),E=Symbol("list");var Z=b({name:"List",props:Y,setup(t){const{mergedClsPrefixRef:e}=P(t),g=$("List","List",X,V,t,e);return B(E,{mergedClsPrefixRef:e}),{mergedClsPrefix:e,cssVars:_(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:m,textColor:o,color:p,colorModal:i,colorPopover:c,borderColor:a,borderColorModal:k,borderColorPopover:y,borderRadius:S}}=g.value;return{"--font-size":m,"--bezier":v,"--text-color":o,"--color":p,"--border-radius":S,"--border-color":a,"--border-color-modal":k,"--border-color-popover":y,"--color-modal":i,"--color-popover":c}})}},render(){const{$slots:t,mergedClsPrefix:e}=this;return r("ul",{class:[`${e}-list`,this.bordered&&`${e}-list--bordered`],style:this.cssVars},t.header?r("div",{class:`${e}-list__header`},n(t,"header")):null,n(t,"default"),t.footer?r("div",{class:`${e}-list__footer`},n(t,"footer")):null)}}),ee=b({name:"ListItem",setup(){const t=I(E,null);return t||F("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return r("li",{class:`${e}-list-item`},t.prefix?r("div",{class:`${e}-list-item__prefix`},n(t,"prefix")):null,t.default?r("div",{class:`${e}-list-item__main`},t):null,t.suffix?r("div",{class:`${e}-list-item__suffix`},n(t,"suffix")):null)}}),te=d("thing",`
 display: flex;
 transition: color .3s var(--bezier);
 font-size: var(--font-size);
 color: var(--text-color);
`,[d("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),d("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[d("thing-header-wrapper",`
 flex: 1;
 `)]),d("thing-main",`
 flex-grow: 1;
 `,[d("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[s("title",`
 font-size: 16px;
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 color: var(--title-text-color);
 `)]),s("description",[u("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),s("content",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("footer",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("action",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const re=Object.assign(Object.assign({},$.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var oe=b({name:"Thing",props:re,setup(t,{slots:e}){const{mergedClsPrefixRef:g}=P(t),v=$("Thing","Thing",te,H,t,g),m=_(()=>{const{self:{titleTextColor:o,textColor:p,titleFontWeight:i,fontSize:c},common:{cubicBezierEaseInOut:a}}=v.value;return{"--bezier":a,"--font-size":c,"--text-color":p,"--title-font-weight":i,"--title-text-color":o}});return()=>{const{value:o}=g;return r("div",{class:`${o}-thing`,style:m.value},e.avatar&&t.contentIndented?r("div",{class:`${o}-thing-avatar`},n(e,"avatar")):null,r("div",{class:`${o}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?r("div",{class:`${o}-thing-avatar-header-wrapper`},e.avatar?r("div",{class:`${o}-thing-avatar`},n(e,"avatar")):null,e.header||t.title||e["header-extra"]||t.titleExtra?r("div",{class:`${o}-thing-header-wrapper`},r("div",{class:`${o}-thing-header`},e.header||t.title?r("div",{class:`${o}-thing-header__title`},n(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?r("div",{class:`${o}-thing-header__extra`},n(e,"header-extra",void 0,()=>[t.titleExtra])):null),e.description||t.description?r("div",{class:`${o}-thing-main__description`},n(e,"description",void 0,()=>[t.description])):null):null):r(z,null,e.header||t.title||e["header-extra"]||t.titleExtra?r("div",{class:`${o}-thing-header`},e.header||t.title?r("div",{class:`${o}-thing-header__title`},n(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?r("div",{class:`${o}-thing-header__extra`},n(e,"header-extra",void 0,()=>[t.titleExtra])):null):null,e.description||t.description?r("div",{class:`${o}-thing-main__description`},n(e,"description",void 0,()=>[t.description])):null),e.default||t.content?r("div",{class:`${o}-thing-main__content`},n(e,"default",void 0,()=>[t.content])):null,e.footer?r("div",{class:`${o}-thing-main__footer`},n(e,"footer")):null,e.action?r("div",{class:`${o}-thing-main__action`},n(e,"action")):null))}}});const ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ne=h("path",{d:"M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ae=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 272l80 80l80-80"},null,-1),le=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 48v288"},null,-1);var de=b({name:"DownloadOutline",render:function(e,g){return x(),w("svg",ie,[ne,ae,le])}});async function se(){return await K(q+"iso.json")}const ce=C("Versions"),ue=C(" Download "),xe=b({setup(t){const e=A(),g=N(),v=J();L(()=>se().then(i=>e.commit("setDownloads",i),i=>v.error(i.message)));const m=_(()=>{const i=g.params.distro;if(i!=null)return e.state.downloadContents.find(c=>c.distro==i)}),o=_(()=>{var i;return((i=m.value)==null?void 0:i.urls.map(c=>{const a=c.name.match(/(.*?) \((.*)\)/);return{title:a?a[1]:"null",description:a?a[2]:"null",url:c.url}}))||[]}),p=i=>window.open(i);return(i,c)=>(x(),j(z,null,[h(l(U),{prefix:"bar"},{default:f(()=>{var a;return[C(R(((a=l(m))==null?void 0:a.distro)||"Downloads"),1)]}),_:1}),l(m)?(x(),w(l(Z),{key:0,bordered:""},{header:f(()=>[ce]),default:f(()=>[(x(!0),j(z,null,D(l(o),(a,k)=>(x(),w(l(ee),{key:k},{suffix:f(()=>[h(l(G),{onClick:y=>p(a.url)},{icon:f(()=>[h(l(W),null,{default:f(()=>[h(l(de))]),_:1})]),default:f(()=>[ue]),_:2},1032,["onClick"])]),default:f(()=>[h(l(oe),{title:a.title,description:a.description},null,8,["title","description"])]),_:2},1024))),128))]),_:1})):(x(),w(l(Q),{key:1,size:"huge",status:"info",title:"Distribute",description:"Select menu to view downloads"}))],64))}});export{xe as default};
