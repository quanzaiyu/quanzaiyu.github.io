(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{205:function(t,e,i){},318:function(t,e,i){"use strict";var a=i(205);i.n(a).a},347:function(t,e,i){"use strict";i.r(e);var a={name:"aLink",props:["href","title","time","category","withoutExt","line"],computed:{link(){return this.href||this.title},target(){if(!this.href)return"_blank"}},methods:{computeCategory:t=>t instanceof Array?t.join("、"):t}},s=(i(318),i(1)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alink",class:{line:t.line}},[t.href?i("div",[i("router-link",{attrs:{to:t.withoutExt?t.link:t.$ensureExt(t.link)}},[t._v(t._s(t.title))])],1):i("div",[i("a",{attrs:{href:t.link,target:t.target}},[t._v(t._s(t.title))])]),i("div",{staticClass:"info"},[t.time?i("span",{staticClass:"time"},[t._v(t._s(t.time))]):t._e(),t.category?i("span",{staticClass:"category"},[t._v(t._s(t.computeCategory(t.category)))]):t._e()])])},[],!1,null,"53e5e2ea",null);e.default=n.exports}}]);