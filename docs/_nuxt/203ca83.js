(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{265:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("0596a95c",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";r(265)},274:function(t,e,r){var n=r(32)(!1);n.push([t.i,"img[data-v-284c6c8a]{border-radius:50%}",""]),t.exports=n},280:function(t,e,r){"use strict";r.r(e);var n={name:"Portrait"},o=(r(273),r(15)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:"/me.jpg"}})}),[],!1,null,"284c6c8a",null);e.default=component.exports},286:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("6a22570c",content,!0,{sourceMap:!1})},287:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("302b4f47",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";r(286)},294:function(t,e,r){var n=r(32)(!1);n.push([t.i,'body[data-v-44d4af08]{background-color:#fff;color:#222;font-size:120%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}a[data-v-44d4af08]{color:#833ab4}h1[data-v-44d4af08],h2[data-v-44d4af08],h3[data-v-44d4af08],h4[data-v-44d4af08]{font-weight:700;padding:0;margin:1rem 0;text-rendering:geometricPrecision}header h1[data-v-44d4af08]{font-size:2.8rem;background:linear-gradient(90deg,#833ab4,#fd1d1d 50%,#fcb045);-webkit-background-clip:text;-webkit-text-fill-color:transparent}article[data-v-44d4af08]{display:grid;grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem}header[data-v-44d4af08]{grid-area:1/1/1/span 2}article .sidebar[data-v-44d4af08]{grid-area:2/1/2/1}article .main[data-v-44d4af08]{grid-area:2/2/2/2}.sidebar[data-v-44d4af08],time[data-v-44d4af08]{color:rgba(34,34,34,.65)}.sidebar[data-v-44d4af08]{max-width:15rem;line-height:2.1875rem}footer section[data-v-44d4af08]{margin-bottom:2rem}section.contact .author-image img[data-v-44d4af08]{width:48px;height:48px;margin-right:1rem}section.contact[data-v-44d4af08]{display:flex;text-align:left;align-items:center}section.contact a[data-v-44d4af08]{text-decoration:none}section.tags span[data-v-44d4af08]:after{content:", "}section.tags span[data-v-44d4af08]:last-child:after{content:" "}@media only screen and (min-device-width:320px)and (max-device-width:480px){article[data-v-44d4af08]{display:block}header h1[data-v-44d4af08]{font-size:div(2.8rem,1.2)}}',""]),t.exports=n},295:function(t,e,r){"use strict";r(287)},296:function(t,e,r){var n=r(32)(!1);n.push([t.i,'body{background-color:#fff;color:#222;font-size:120%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}a{color:#833ab4}h1,h2,h3,h4{font-weight:700;padding:0;margin:1rem 0;text-rendering:geometricPrecision}.article-content{background-color:#fff;color:#222}.article-content ol,.article-content p,.article-content ul{line-height:2.1875rem}.article-content blockquote{background-color:hsla(0,0%,100%,.05);margin:0;padding:1rem}.article-content blockquote p{padding:0;margin:0}.article-content .centerpiece{text-align:center}.article-content .centerpiece img{width:80%}.article-content h1{color:#1d3d28}.article-content h2{color:#2a4993}',""]),t.exports=n},314:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(39),{components:{Portrait:r(280).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.$moment,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,c=n(article.createdAt).format("MMMM Do, YYYY"),e.abrupt("return",{article:article,formattedCreatedAt:c});case 6:case"end":return e.stop()}}),e)})))()}}),c=(r(293),r(295),r(15)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("time",{attrs:{datetime:t.article.createdAt}},[t._v("\n        "+t._s(t.formattedCreatedAt)+"\n    ")])]),t._v(" "),r("div",{staticClass:"main"},[r("nuxt-content",{staticClass:"article-content",attrs:{document:t.article}})],1),t._v(" "),r("div",{staticClass:"sidebar"},[r("footer",[r("section",{staticClass:"tags"},[r("strong",[t._v("Tags:")]),t._v(" "),t._l(t.article.tags,(function(e){return r("span",{key:e},[t._v(t._s(e))])}))],2),t._v(" "),r("section",{staticClass:"contact"},[r("span",{staticClass:"author-image"},[r("Portrait")],1),t._v(" "),r("a",{attrs:{href:"https://twitter.com/intent/tweet?screen_name=miked&ref_src=twsrc%5Etfw"}},[t._v("@miked")])])])])])}),[],!1,null,"44d4af08",null);e.default=component.exports;installComponents(component,{Portrait:r(280).default})}}]);