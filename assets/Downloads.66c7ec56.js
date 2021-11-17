import{h as v,p as B,c as _,j as o,k as i,i as I,F as k,D as x,E as p,B as f,I as g,K as C,N,J as a,f as z,P as L,b as R,L as D}from"./vue.d09c2211.js";import{s as c,f as l,q as M,g as s,T as O,U as T,h as y,j as w,az as V,aA as F,aB as H,ak as K,am as q,ap as A,ae as J,ao as U,an as W,ar as G}from"./index.b4c54254.js";import{N as Q}from"./Result.a1481fa7.js";import"./utils.988a71ed.js";var X=c([l("list",`
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
 `,[l("list-item",`
 padding: 12px 20px;
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)]),s("header, footer",`
 padding: 12px 20px;
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)])]),s("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--bezier);
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)]),l("list-item",`
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
 `),c("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)])]),O(l("list",`
 --merged-color: var(--color-modal);
 --merged-border-color: var(--border-color-modal);
 `)),T(l("list",`
 --merged-color: var(--color-popover);
 --merged-border-color: var(--border-color-popover);
 `))]);const Y=Object.assign(Object.assign({},w.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),j=Symbol("list");var Z=v({name:"List",props:Y,setup(t){const{mergedClsPrefixRef:e}=y(t),d=w("List","List",X,V,t,e);return B(j,{mergedClsPrefixRef:e}),{mergedClsPrefix:e,cssVars:_(()=>{const{common:{cubicBezierEaseInOut:m},self:{fontSize:n,textColor:r,color:u,colorModal:h,colorPopover:b,borderColor:$,borderColorModal:P,borderColorPopover:E,borderRadius:S}}=d.value;return{"--font-size":n,"--bezier":m,"--text-color":r,"--color":u,"--border-radius":S,"--border-color":$,"--border-color-modal":P,"--border-color-popover":E,"--color-modal":h,"--color-popover":b}})}},render(){const{$slots:t,mergedClsPrefix:e}=this;return o("ul",{class:[`${e}-list`,this.bordered&&`${e}-list--bordered`],style:this.cssVars},t.header?o("div",{class:`${e}-list__header`},i(t,"header")):null,i(t,"default"),t.footer?o("div",{class:`${e}-list__footer`},i(t,"footer")):null)}}),ee=v({name:"ListItem",setup(){const t=I(j,null);return t||F("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return o("li",{class:`${e}-list-item`},t.prefix?o("div",{class:`${e}-list-item__prefix`},i(t,"prefix")):null,t.default?o("div",{class:`${e}-list-item__main`},t):null,t.suffix?o("div",{class:`${e}-list-item__suffix`},i(t,"suffix")):null)}}),te=l("thing",`
 display: flex;
 transition: color .3s var(--bezier);
 font-size: var(--font-size);
 color: var(--text-color);
`,[l("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),l("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[l("thing-header-wrapper",`
 flex: 1;
 `)]),l("thing-main",`
 flex-grow: 1;
 `,[l("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[s("title",`
 font-size: 16px;
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 color: var(--title-text-color);
 `)]),s("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),s("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const re=Object.assign(Object.assign({},w.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var oe=v({name:"Thing",props:re,setup(t,{slots:e}){const{mergedClsPrefixRef:d}=y(t),m=w("Thing","Thing",te,H,t,d),n=_(()=>{const{self:{titleTextColor:r,textColor:u,titleFontWeight:h,fontSize:b},common:{cubicBezierEaseInOut:$}}=m.value;return{"--bezier":$,"--font-size":b,"--text-color":u,"--title-font-weight":h,"--title-text-color":r}});return()=>{const{value:r}=d;return o("div",{class:`${r}-thing`,style:n.value},e.avatar&&t.contentIndented?o("div",{class:`${r}-thing-avatar`},i(e,"avatar")):null,o("div",{class:`${r}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?o("div",{class:`${r}-thing-avatar-header-wrapper`},e.avatar?o("div",{class:`${r}-thing-avatar`},i(e,"avatar")):null,e.header||t.title||e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header-wrapper`},o("div",{class:`${r}-thing-header`},e.header||t.title?o("div",{class:`${r}-thing-header__title`},i(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header__extra`},i(e,"header-extra",void 0,()=>[t.titleExtra])):null),e.description||t.description?o("div",{class:`${r}-thing-main__description`},i(e,"description",void 0,()=>[t.description])):null):null):o(k,null,e.header||t.title||e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header`},e.header||t.title?o("div",{class:`${r}-thing-header__title`},i(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header__extra`},i(e,"header-extra",void 0,()=>[t.titleExtra])):null):null,e.description||t.description?o("div",{class:`${r}-thing-main__description`},i(e,"description",void 0,()=>[t.description])):null),e.default||t.content?o("div",{class:`${r}-thing-main__content`},i(e,"default",void 0,()=>[t.content])):null,e.footer?o("div",{class:`${r}-thing-main__footer`},i(e,"footer")):null,e.action?o("div",{class:`${r}-thing-main__action`},i(e,"action")):null))}}});const ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ne=f("path",{d:"M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ae=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 272l80 80l80-80"},null,-1),le=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 48v288"},null,-1);var se=v({name:"DownloadOutline",render:function(e,d){return x(),p("svg",ie,[ne,ae,le])}});async function de(){return await K(q+"iso.json")}const ce=z("Versions"),ue=z(" Download "),he=v({props:{distro:null},setup(t){const e=t,d=_(()=>e.distro.urls.map(n=>{const r=n.name.match(/(.*?) \((.*)\)/);return{title:r?r[1]:"null",description:r?r[2]:"null",url:n.url}})||[]),m=n=>window.open(n);return(n,r)=>(x(),p(a(Z),{bordered:"",style:{margin:"auto 0"}},{header:g(()=>[ce]),default:g(()=>[(x(!0),C(k,null,N(a(d),(u,h)=>(x(),p(a(ee),{key:h},{suffix:g(()=>[f(a(J),{onClick:b=>m(u.url)},{icon:g(()=>[f(a(A),null,{default:g(()=>[f(a(se))]),_:1})]),default:g(()=>[ue]),_:2},1032,["onClick"])]),default:g(()=>[f(a(oe),{title:u.title,description:u.description},null,8,["title","description"])]),_:2},1024))),128))]),_:1}))}}),ve=v({setup(t){const e=U(),d=L(),m=W();R(()=>de().then(r=>e.commit("setDownloads",r),r=>m.error(r.message)));const n=_(()=>e.state.downloadContents.find(r=>r.distro==d.params.distro));return(r,u)=>(x(),C(k,null,[f(a(G),{prefix:"bar"},{default:g(()=>{var h;return[z(D(((h=a(n))==null?void 0:h.distro)||"Downloads"),1)]}),_:1}),a(n)?(x(),p(he,{key:0,distro:a(n)},null,8,["distro"])):(x(),p(a(Q),{key:1,size:"huge",status:"info",title:"Distribute",description:"Select menu to view downloads"}))],64))}});export{ve as default};
