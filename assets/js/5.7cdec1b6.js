(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1013:function(t,e,a){"use strict";a.r(e);var o=a(2),s=a.n(o),n=a(33),r=a.n(n),i=a(3),h={data:()=>({data:{footers:["MIT Licensed | Copyright © 2018-present  滇ICP备16006294号",'Design by <a href="/">Quanzaiyu</a> | Power by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> | Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold">Coding Pages</a>']},isSidebarOpen:!1}),beforeCreate(){this.$on("sw-updated",t=>{console.log("user:sw-updated")})},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),r.a.configure({showSpinner:!0}),this.$router.beforeEach((t,e,a)=>{t.path===e.path||s.a.component(t.name)||r.a.start(),a()}),this.$router.afterEach(()=>{r.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(a(986),a(987),a(999),a(0)),d=Object(c.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t.$page.frontmatter.layout?a("div",{staticClass:"custom-layout"},[a(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._t("page-bottom",null,{slot:"bottom"})],2),t.data.footers&&t.data.footers.length?a("div",{staticClass:"footers"},t._l(t.data.footers,function(e){return a("p",[a("span",{domProps:{innerHTML:t._s(e)}})])}),0):t._e()],1)},[],!1,null,"38547c78",null);e.default=d.exports},983:function(t,e,a){},984:function(t,e,a){},986:function(t,e,a){"use strict";var o=a(983);a.n(o).a},987:function(t,e,a){"use strict";var o=a(984);a.n(o).a},988:function(t,e,a){},999:function(t,e,a){"use strict";var o=a(988);a.n(o).a}}]);