(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{263:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("e80277f0",content,!0,{sourceMap:!1})},264:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("059d4d1f",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";r(263)},269:function(t,e,r){var n=r(32)(!1);n.push([t.i,'body[data-v-ab82c968]{background-color:#fff;color:#222;font-size:120%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}a[data-v-ab82c968]{color:#833ab4}h1[data-v-ab82c968],h2[data-v-ab82c968],h3[data-v-ab82c968],h4[data-v-ab82c968]{font-weight:700;padding:0;margin:1rem 0;text-rendering:geometricPrecision}.nuxt-link-active[data-v-ab82c968],a[data-v-ab82c968]{text-decoration:none;color:linear-gradient(90deg,#833ab4,#fd1d1d 50%,#fcb045);border-bottom:1px solid rgba(131,58,180,.15)}h3[data-v-ab82c968]{margin:0 0 .5rem}p[data-v-ab82c968]{margin:.75rem 0 0;line-height:1.75rem}time[data-v-ab82c968]{color:rgba(34,34,34,.65);font-size:.95rem;margin-bottom:.25rem;display:block}',""]),t.exports=n},270:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleStub",props:{article:{type:Object,default:function(){}}}},o=(r(268),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("time",{attrs:{datetime:t.article.createdAt}},[t._v("\n    "+t._s(t.article.formattedCreatedAt)+"\n  ")]),t._v(" "),r("h3",[r("NuxtLink",{attrs:{to:"/article/"+t.article.slug}},[t._v("\n      "+t._s(t.article.title)+"\n    ")])],1),t._v(" "),r("p",[t._v("\n    "+t._s(t.article.description)+"\n  ")])])}),[],!1,null,"ab82c968",null);e.default=component.exports},271:function(t,e,r){"use strict";r(264)},272:function(t,e,r){var n=r(32)(!1);n.push([t.i,"ul[data-v-708bb8f7]{list-style:none;margin:0;padding:0}li[data-v-708bb8f7]{margin-bottom:2rem}",""]),t.exports=n},281:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleList",props:{articles:{type:Array,default:function(){return[]}}}},o=(r(271),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.articles,(function(article){return r("li",{key:article.stub},[r("ArticleStub",{attrs:{article:article}})],1)})),0)}),[],!1,null,"708bb8f7",null);e.default=component.exports;installComponents(component,{ArticleStub:r(270).default})}}]);