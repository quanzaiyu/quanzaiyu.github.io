(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1085:function(t,e,i){},1096:function(t,e,i){"use strict";var a=i(1085);i.n(a).a},1108:function(t,e,i){"use strict";i.r(e);var a={name:"aLink",props:["href","title","time","category","withoutExt","line"],computed:{link(){return this.href||this.title},target(){if(!this.href)return"_blank"}},methods:{computeCategory:t=>t instanceof Array?t.join("、"):t}},s=(i(1096),i(0)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alink",class:{line:t.line}},[t.href?i("div",[i("router-link",{attrs:{to:t.withoutExt?t.link:t.$ensureExt(t.link)}},[t._v(t._s(t.title))])],1):i("div",[i("a",{attrs:{href:t.link,target:t.target}},[t._v(t._s(t.title))])]),i("div",{staticClass:"info"},[t.time?i("span",{staticClass:"time"},[t._v(t._s(t.time))]):t._e(),t.category?i("span",{staticClass:"category"},[t._v(t._s(t.computeCategory(t.category)))]):t._e()])])},[],!1,null,"3b062a4e",null);e.default=n.exports}}]);