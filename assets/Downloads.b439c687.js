import{j as p,p as N,a as w,k as o,l as a,i as R,F as k,A as v,B as b,c as f,ag as g,h as z,aj as C,ah as i,ai as y,al as L,an as M,d as O}from"./vue.30e3e117.js";import{s as c,f as d,q as T,g as s,T as V,U as D,h as j,j as $,aA as F,aB as A,aC as H,ak as q,al as K,am as P,ap as U,ae as W,ao as G,an as J,as as Q}from"./index.7dd82d94.js";import{N as X}from"./Result.0fbad532.js";import"./utils.5eb1bd3c.js";var Y=c([d("list",`
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
 `,[T("bordered",`
 border-radius: var(--border-radius);
 border: 1px solid var(--merged-border-color);
 `,[d("list-item",`
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
 `),c("&:not(:last-child)",`
 border-bottom: 1px solid var(--merged-border-color);
 `)])]),V(d("list",`
 --merged-color: var(--color-modal);
 --merged-border-color: var(--border-color-modal);
 `)),D(d("list",`
 --merged-color: var(--color-popover);
 --merged-border-color: var(--border-color-popover);
 `))]);const Z=Object.assign(Object.assign({},$.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),E=Symbol("list");var ee=p({name:"List",props:Z,setup(t){const{mergedClsPrefixRef:e}=j(t),l=$("List","List",Y,F,t,e);return N(E,{mergedClsPrefixRef:e}),{mergedClsPrefix:e,cssVars:w(()=>{const{common:{cubicBezierEaseInOut:m},self:{fontSize:x,textColor:r,color:n,colorModal:u,colorPopover:h,borderColor:_,borderColorModal:B,borderColorPopover:S,borderRadius:I}}=l.value;return{"--font-size":x,"--bezier":m,"--text-color":r,"--color":n,"--border-radius":I,"--border-color":_,"--border-color-modal":B,"--border-color-popover":S,"--color-modal":u,"--color-popover":h}})}},render(){const{$slots:t,mergedClsPrefix:e}=this;return o("ul",{class:[`${e}-list`,this.bordered&&`${e}-list--bordered`],style:this.cssVars},t.header?o("div",{class:`${e}-list__header`},a(t,"header")):null,a(t,"default"),t.footer?o("div",{class:`${e}-list__footer`},a(t,"footer")):null)}}),te=p({name:"ListItem",setup(){const t=R(E,null);return t||A("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return o("li",{class:`${e}-list-item`},t.prefix?o("div",{class:`${e}-list-item__prefix`},a(t,"prefix")):null,t.default?o("div",{class:`${e}-list-item__main`},t):null,t.suffix?o("div",{class:`${e}-list-item__suffix`},a(t,"suffix")):null)}}),re=d("thing",`
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
 `)]),s("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),s("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const oe=Object.assign(Object.assign({},$.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var ie=p({name:"Thing",props:oe,setup(t,{slots:e}){const{mergedClsPrefixRef:l}=j(t),m=$("Thing","Thing",re,H,t,l),x=w(()=>{const{self:{titleTextColor:r,textColor:n,titleFontWeight:u,fontSize:h},common:{cubicBezierEaseInOut:_}}=m.value;return{"--bezier":_,"--font-size":h,"--text-color":n,"--title-font-weight":u,"--title-text-color":r}});return()=>{const{value:r}=l;return o("div",{class:`${r}-thing`,style:x.value},e.avatar&&t.contentIndented?o("div",{class:`${r}-thing-avatar`},a(e,"avatar")):null,o("div",{class:`${r}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?o("div",{class:`${r}-thing-avatar-header-wrapper`},e.avatar?o("div",{class:`${r}-thing-avatar`},a(e,"avatar")):null,e.header||t.title||e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header-wrapper`},o("div",{class:`${r}-thing-header`},e.header||t.title?o("div",{class:`${r}-thing-header__title`},a(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header__extra`},a(e,"header-extra",void 0,()=>[t.titleExtra])):null),e.description||t.description?o("div",{class:`${r}-thing-main__description`},a(e,"description",void 0,()=>[t.description])):null):null):o(k,null,e.header||t.title||e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header`},e.header||t.title?o("div",{class:`${r}-thing-header__title`},a(e,"header",void 0,()=>[t.title])):null,e["header-extra"]||t.titleExtra?o("div",{class:`${r}-thing-header__extra`},a(e,"header-extra",void 0,()=>[t.titleExtra])):null):null,e.description||t.description?o("div",{class:`${r}-thing-main__description`},a(e,"description",void 0,()=>[t.description])):null),e.default||t.content?o("div",{class:`${r}-thing-main__content`},a(e,"default",void 0,()=>[t.content])):null,e.footer?o("div",{class:`${r}-thing-main__footer`},a(e,"footer")):null,e.action?o("div",{class:`${r}-thing-main__action`},a(e,"action")):null))}}});const ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ae=f("path",{d:"M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),le=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 272l80 80l80-80"},null,-1),de=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 48v288"},null,-1);var se=p({name:"DownloadOutline",render:function(e,l){return v(),b("svg",ne,[ae,le,de])}});async function ce(){return await q(K+"iso.json")}const ue=p({props:{distro:null},setup(t){const e=t,{t:l}=P(),m=w(()=>e.distro.urls.map(r=>{const n=r.name.match(/(.*?) \((.*)\)/);return{title:n?n[1]:"null",description:n?n[2]:"null",url:r.url}})||[]),x=r=>window.open(r);return(r,n)=>(v(),b(i(ee),{bordered:"",style:{margin:"auto 0"}},{header:g(()=>[z(C(i(l)("downloads.versions")),1)]),default:g(()=>[(v(!0),y(k,null,L(i(m),(u,h)=>(v(),b(i(te),{key:h},{suffix:g(()=>[f(i(W),{onClick:_=>x(u.url)},{icon:g(()=>[f(i(U),null,{default:g(()=>[f(i(se))]),_:1})]),default:g(()=>[z(" "+C(i(l)("downloads.download")),1)]),_:2},1032,["onClick"])]),default:g(()=>[f(i(ie),{title:u.title,description:u.description},null,8,["title","description"])]),_:2},1024))),128))]),_:1}))}}),xe=p({setup(t){const{t:e}=P(),l=G(),m=M(),x=J();O(()=>ce().then(n=>l.commit("setDownloads",n),n=>x.error(n.message)));const r=w(()=>l.state.downloadContents.find(n=>n.distro==m.params.distro));return(n,u)=>(v(),y(k,null,[f(i(Q),{prefix:"bar"},{default:g(()=>{var h;return[z(C(((h=i(r))==null?void 0:h.distro)||i(e)("header.downloads")),1)]}),_:1}),i(r)?(v(),b(ue,{key:0,distro:i(r)},null,8,["distro"])):(v(),b(i(X),{key:1,size:"huge",status:"info",title:i(e)("downloads.title"),description:i(e)("downloads.description")},null,8,["title","description"]))],64))}});export{xe as default};
