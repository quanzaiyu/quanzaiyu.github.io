(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(t,e,n){"use strict";var r=n(93);n.n(r).a},320:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),s=n(90),a=n.n(s),i=n(2),u={data:()=>({data:{footers:["MIT Licensed | Copyright © 2018-present  滇ICP备16006294号",'Design by <a href="/">Quanzaiyu</a> | Power by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> | Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold">Coding Pages</a>']},isSidebarOpen:!1}),beforeCreate(){this.$on("sw-updated",t=>{console.log("user:sw-updated")})},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),a.a.configure({showSpinner:!0}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||o.a.component(t.name)||a.a.start(),n()}),this.$router.afterEach(()=>{a.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(n(91),n(92),n(148),n(0)),l=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[n("keep-alive",[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}})],1),n("keep-alive",[n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1),t.$page.frontmatter.layout?n("keep-alive",[n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1)]):t.$page.frontmatter.home?n("keep-alive",[n("Home")],1):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._t("page-bottom",null,{slot:"bottom"})],2),t.data.footers&&t.data.footers.length?n("div",{staticClass:"footers"},t._l(t.data.footers,function(e){return n("p",[n("span",{domProps:{innerHTML:t._s(e)}})])})):t._e()],1)},[],!1,null,"0fc8e024",null);l.options.__file="Layout.vue";e.default=l.exports},88:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){var r,o;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(o="function"==typeof(r=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}t.configure=function(t){var n,r;for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(a){var i=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var u=t.render(!i),c=u.querySelector(e.barSelector),l=e.speed,d=e.easing;return u.offsetWidth,o(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(c,function(t,n,o){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+n+"ms "+o,s}(a,l,d)),1===a?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},l)},l)):setTimeout(n,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!=typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");i(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=e.template;var a,u=o.querySelector(e.barSelector),c=n?"-100":r(t.status||0),d=document.querySelector(e.parent);return s(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(a=o.querySelector(e.spinnerSelector))&&l(a),d!=document.body&&i(d,"nprogress-custom-parent"),d.appendChild(o),o},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&l(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,o=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=t[o]+s)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,o,s=arguments;if(2==s.length)for(n in e)void 0!==(o=e[n])&&e.hasOwnProperty(n)&&r(t,n,o);else r(t,s[1],s[2])}}();function a(t,e){var n="string"==typeof t?t:c(t);return n.indexOf(" "+e+" ")>=0}function i(t,e){var n=c(t),r=n+e;a(n,e)||(t.className=r.substring(1))}function u(t,e){var n,r=c(t);a(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function l(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?r.call(e,n,e,t):r)||(t.exports=o)},91:function(t,e,n){"use strict";var r=n(88);n.n(r).a},92:function(t,e,n){"use strict";var r=n(89);n.n(r).a},93:function(t,e,n){}}]);