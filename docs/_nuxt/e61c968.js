(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(e,t,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("082a3c9d",content,!0,{sourceMap:!1})},280:function(e,t,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("302b4f47",content,!0,{sourceMap:!1})},287:function(e,t,r){"use strict";r(279)},288:function(e,t,r){var n=r(42)(!1);n.push([e.i,'body[data-v-8de78774]{background-color:#2f6140;color:#f4eae6;font-size:120%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}body>*[data-v-8de78774]{margin:2rem auto 3rem;max-width:45rem}a[data-v-8de78774]{color:#e06b71}h1[data-v-8de78774],h2[data-v-8de78774],h3[data-v-8de78774],h4[data-v-8de78774]{font-weight:700;padding:0;margin:1rem 0;text-rendering:geometricPrecision}header[data-v-8de78774]{margin-bottom:2rem}header h1[data-v-8de78774]{font-size:2.8rem;color:#ecc046}header time[data-v-8de78774]{color:rgba(244,234,230,.65)}footer[data-v-8de78774]{margin-top:4rem}@media only screen and (min-device-width:320px)and (max-device-width:480px){header h1[data-v-8de78774]{font-size:div(2.8rem,1.2)}}',""]),e.exports=n},289:function(e,t,r){"use strict";r(280)},290:function(e,t,r){var n=r(42)(!1);n.push([e.i,'body{background-color:#2f6140;color:#f4eae6;font-size:120%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}body>*{margin:2rem auto 3rem;max-width:45rem}a{color:#e06b71}h1,h2,h3,h4{font-weight:700;padding:0;margin:1rem 0;text-rendering:geometricPrecision}.article-content{background-color:#fff;color:#222;margin:0 -2rem;padding:1rem 2rem}.article-content ol,.article-content p,.article-content ul{line-height:2.1875rem}.article-content blockquote{background-color:hsla(0,0%,100%,.05);margin:0;padding:1rem}.article-content blockquote p{padding:0;margin:0}.article-content .centerpiece{text-align:center}.article-content .centerpiece img{width:80%}.article-content h1{color:#1d3d28}.article-content h2{color:#dab141}',""]),e.exports=n},308:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(37),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,article,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.$moment,o=e.params,t.next=3,r("articles",o.slug).fetch();case 3:return article=t.sent,c=n(article.createdAt).format("MMMM Do, YYYY"),t.abrupt("return",{article:article,formattedCreatedAt:c});case 6:case"end":return t.stop()}}),t)})))()}}),c=(r(287),r(289),r(15)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("header",[r("h1",[e._v(e._s(e.article.title))]),e._v(" "),r("time",{attrs:{datetime:e.article.createdAt}},[e._v("\n      "+e._s(e.formattedCreatedAt)+"\n    ")])]),e._v(" "),r("nuxt-content",{staticClass:"article-content",attrs:{document:e.article}}),e._v(" "),e._m(0)],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("nav",[r("h3",[e._v("Start a conversation")]),e._v(" "),r("a",{staticClass:"twitter-mention-button",attrs:{href:"https://twitter.com/intent/tweet?screen_name=miked&ref_src=twsrc%5Etfw","data-show-count":"false","data-size":"large"}},[e._v("Tweet this @miked")]),r("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})])])}],!1,null,"8de78774",null);t.default=component.exports}}]);