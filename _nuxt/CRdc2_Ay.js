import b from"./BiivD4vr.js";import{d as u,N as t,l as f}from"./D7uXst6j.js";const d=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,o=u({data(){return{activeTabIndex:0,counter:0}},render(){var r,s;const n=((s=(r=this.$slots)==null?void 0:r.default)==null?void 0:s.call(r))||[],i=n.map((e,p)=>{var a,c,v;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((c=e==null?void 0:e.props)==null?void 0:c.label)||`${p}`,active:((v=e==null?void 0:e.props)==null?void 0:v.active)||!1,component:e}});return t("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[t(b,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),t("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,p)=>{var a,c;return t("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!d(e,"code")&&!d(e,"pre")}},[d(e,"code")||d(e,"pre")?e:t("div",{class:{"preview-canvas":!0}},[((c=(a=e.children)==null?void 0:a.default)==null?void 0:c.call(a))||e.children])])}))])}}),h=f(o,[["__scopeId","data-v-65f78c8a"]]);export{h as default};
