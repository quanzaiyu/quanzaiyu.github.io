(window.webpackJsonp=window.webpackJsonp||[]).push([[17,21],{203:function(t,e,n){"use strict";var s=n(95);n.n(s).a},204:function(t,e,n){},211:function(t,e,n){"use strict";n.r(e);var s=n(4),a=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{message:"发现新内容可用",buttonText:"刷新"},updateEvent:null}),created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(a.i)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(203),n(1)),i=Object(p.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"6f10a460",null);e.default=i.exports},317:function(t,e,n){"use strict";var s=n(204);n.n(s).a},348:function(t,e,n){"use strict";n.r(e);var s={components:{SWUpdatePopup:n(211).default}},a=(n(317),n(1)),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var s=e.reload,a=e.message,o=e.buttonText;return n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(a)),n("br"),t._v(" "),n("button",{on:{click:s}},[t._v(t._s(o))])])}}])})},[],!1,null,null,null);e.default=o.exports},95:function(t,e,n){}}]);