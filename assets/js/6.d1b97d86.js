(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1091:function(t,e,a){},1092:function(t,e,a){},1094:function(t,e,a){"use strict";var s=a(1091);a.n(s).a},1095:function(t,e,a){"use strict";var s=a(1092);a.n(s).a},1100:function(t,e,a){},1111:function(t,e,a){"use strict";var s=a(1100);a.n(s).a},1124:function(t,e,a){"use strict";a.r(e);var s=a(2),o=a.n(s),n=a(40),i=a.n(n),r=a(3),h={data:()=>({footers:["MIT Licensed | Copyright © 2018-present  滇ICP备16006294号",'Design by <a href="/">Quanzaiyu</a> | Power by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> | Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold">Coding Pages</a>'],isSidebarOpen:!1}),beforeCreate(){this.$on("sw-updated",t=>{console.log("user:sw-updated")})},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),i.a.configure({showSpinner:!0}),this.$router.beforeEach((t,e,a)=>{t.path===e.path||o.a.component(t.name)||i.a.start(),a()}),this.$router.afterEach(()=>{i.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(a(1094),a(1095),a(1111),a(0)),u=Object(c.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[a("keep-alive",[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}})],1),a("keep-alive",[a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1),a("div",{staticClass:"custom-layout"},[t._t("default")],2),a("div",{staticClass:"footers"},t._l(t.footers,function(e){return a("p",[a("span",{domProps:{innerHTML:t._s(e)}})])}),0)],1)},[],!1,null,"feb703f6",null);e.default=u.exports}}]);